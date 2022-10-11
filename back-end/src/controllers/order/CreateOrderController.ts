import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService'

class CreateOrderController{
  async handle(req: Request, res: Response){
    const {} = req.body;
  }
}

export { CreateOrderController }