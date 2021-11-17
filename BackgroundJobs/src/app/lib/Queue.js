import Queue from 'bull';
//import options from 'dotenv/lib/env-options';
import redisConfig from '../../config/redis'

import * as job from '../job';

const queues = Object.values(job).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}) )

export default{
    queues,
    add(name,data){
        const queue = this.queues.find(queue => queue.name === name)

        //as opcoes são passadas como segundo parametro
        return queue.bull.add(data, queue.options);
    },


    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                //Sentry.capturesException(err);
                console.log('job failed', queue.key, job.data);
                console.log(err)
            })
        })
    }
}

/*
import RegistrationMail from '../job/RegistrationMail'

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

mailQueue.on('failed', (job, err) => {
    console.log('job failed', job.name, job.data);
    console.log(err)
})

export default mailQueue;
*/

