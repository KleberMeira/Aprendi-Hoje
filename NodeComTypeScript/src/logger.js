//const winston = require('winston')

//const logger = winston.createLogger({
//    level: 'info',
//    format: winston.format.json(),
//    defaultMeta: {service: 'user-service'},
//    transports: [
//        new winston.transports.File({ 'filename': 'error.log', level: 'error'}),
//        new winston.transports.File({ 'filename': 'combined.log'})
//    ]
//})
//export default logger

const { v4: uuidv4 } = require('uuid');

class LoggerService {
    constructor(reqCorrelationId){
        this.correlationId = reqCorrelationId || uuidv4();
    }

    info(msg){
        console.log({ correlationId: this.correlationId, msg});
    }
    error(msg){
        console.log({ correlationId: this.correlationId, msg});
    }
}

module.exports = LoggerService