
import Express from 'express'

import { ApplicationController } from '../controller'
const UserCrudRouter = new Express.Router()

const { register, logIn } = ApplicationController

UserCrudRouter.post('/search', register)

export default UserCrudRouter
