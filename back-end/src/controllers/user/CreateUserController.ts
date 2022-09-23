import {Request, response, Response} from 'express'

class CreateUserController{
  async handle(req: Request, res: Response){
    console.log(req.body)

    return res.json({ ok:true })
  }
}

export { CreateUserController }