import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)

routes.post('/users', UserController.create)

routes.post('/users/buscarEmail', UserController.buscarPorEmail)

export default routes