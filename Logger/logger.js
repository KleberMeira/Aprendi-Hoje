//const correlationId = require(`@sample/correlation-id`)
//const {createLogger} = require(`@sample/logger`);

const winston = require('winston');

const logger = winston.createLogger({
    
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },

    transport: [
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log'})
    ]

    //getCorrelationId: correlationId.getId,
});

module.exports = {logger}