const correlator = require(`@sample/correlation-id`)

function correlationIdMiddleware(req, res, next){
    correlator.bindEmitter(req);
    correlator.bindEmitter(res);
    correlator.bindEmitter(req.socket);

    correlator.withId(() => {
        const currentCorrelartionId = correlator.getId();
        res.set(`x-correlation-id`, currentCorrelartionId)
        next();
    }, req.get(`x-correlation-id`));
}

module.exports = {correlationIdMiddleware};