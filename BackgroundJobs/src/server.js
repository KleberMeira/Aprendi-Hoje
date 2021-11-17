//import 'dotenv/config'
import express from 'express';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue'
const soap = require('soap')

import UserController from './app/controllers/userController'

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queues.bull));

app.use(express.json());

app.use('/admin/queues', BullBoard.UI);

app.post('/users', UserController.store)

app.listen(3333, () => {
    console.log('Server running');
})


let url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';
soap.createClient(url, function(err, client){
    if(err) return console.log(err);
    console.log(client);
})