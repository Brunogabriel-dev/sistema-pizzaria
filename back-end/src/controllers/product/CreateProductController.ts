import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'


class CreateProductController{
  async handle(req: Request, res: Response){
    const {} = req.body;

    const createProductService = new CreateProductService();

    const product = createProductService.execute({

    });

  }
}

export { CreateProductController }