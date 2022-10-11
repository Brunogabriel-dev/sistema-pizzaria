import prismaClient from "../../prisma";

interface OrderRequest{
  table: number;
  name: string;
}

class CreateOrderService{
  async execute({ table, name}: OrderRequest ){

  }
}

export { CreateOrderService }