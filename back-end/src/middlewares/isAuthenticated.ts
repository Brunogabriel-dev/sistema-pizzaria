import {NextFunction, Request, Response} from "express"
import { verify } from 'jsonwebtoken'

interface Payload{
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
){

  // Receber o token
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")
  
  try{
    //Validar esse token.


 }catch(err){
  return res.status(401).end();
 }




}
