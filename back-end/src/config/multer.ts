import crypto from 'crypto';
import multer from 'multer'

import {extname, resolve} from 'path'

export default{
  upload(folder: string){
    return{
      storage: multer.diskStorage({
        destination: resolve()
      })
    }
  }
}