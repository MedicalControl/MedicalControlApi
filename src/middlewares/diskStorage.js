import path from 'path';
import multer from 'multer';

import { __dirname } from '../constants/index.js';

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../resource/images' ), 
    filename: (req, file, cb ) => {
        cb(null, Date.now() + '-monkeywit-' + file.originalname)
    }
});

export const fileUpload = multer({
    storage: diskStorage
}).single('Imagen');
