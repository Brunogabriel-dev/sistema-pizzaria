
interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){
    return { ok: true }
  }
}

export { CreateUserService }