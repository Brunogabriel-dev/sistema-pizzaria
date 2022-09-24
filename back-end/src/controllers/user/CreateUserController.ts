import {Request, response, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    return res.json({ ok:true })
  }
}

export { CreateUserController }