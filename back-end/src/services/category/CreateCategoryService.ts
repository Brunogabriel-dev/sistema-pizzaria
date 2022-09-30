import prismaClient from "../../prisma";

class CreateCategoryService{
  async execute(){
    return { ok: true }
  }
}

export { CreateCategoryService }