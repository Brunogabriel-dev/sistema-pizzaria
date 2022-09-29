import {NextFunction, Request, Response} from "express"
import { verify } from 'jsonwebtoken'

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
){

  console.log("CHAMOU ESSE MIDDLEWARE")

  return next();

}

