import {Request, Response} from 'express';
import {} from '../../services/user/AuthUserService'

class AuthUserController{
  async handle(req: Request, res: Response){
    const {email, password} = req.body

  }
}


export { AuthUserController }
