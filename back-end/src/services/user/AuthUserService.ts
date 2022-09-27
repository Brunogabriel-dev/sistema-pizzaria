
import prismaClient from "../../prisma";

interface AuthRequest{
  email: string;
  password: string;
}


class AuthUserService{
  async execute({ email, password }: AuthRequest){
    //Verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    if(!user){
      throw new Error("User/password incorrect")
    }



    return { ok: true }
  }
}

export {AuthUserService};