import { Router } from 'express'

import UserController from './controllers/UserController'

import LoggerService from './logger'

const routes = Router()

routes.get('/users', UserController.index)

routes.post('/users', (req, res) => {
    const log = new LoggerService(req.headers.correlationId)
    log.info('Got request body', req.body)
    UserController.create
)};

routes.post('/users/buscarEmail', UserController.buscarPorEmail)

export default routes