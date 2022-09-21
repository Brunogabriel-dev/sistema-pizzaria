import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';

import { router } from './routes'

const app = express();
app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    
  }
})

app.listen(3333, () => console.log('Servidor online!'));