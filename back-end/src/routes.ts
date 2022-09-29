import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', new DetailuserController().handle)

export { router };