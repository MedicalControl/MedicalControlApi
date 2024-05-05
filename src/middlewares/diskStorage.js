import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import multer from 'multer';

// Get the current module's file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../resource/images' ), 
    filename: (req, file, cb ) => {
        cb(null, Date.now() + '-monkeywit-' + file.originalname)
    }
});

export const fileUpload = multer({
    storage: diskStorage
}).single('Imagen');
