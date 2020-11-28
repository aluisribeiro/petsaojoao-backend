import multer from 'multer';
import { Request } from "express"

const storage = multer.diskStorage({
    filename: (request: Request, file: Express.Multer.File, cb) => {
        const { petId } = request.body;

        const fileName = `${petId} - ${Date.now()}`;
        
        cb(null, fileName);
    },
})

const multerConfig = multer({
    storage: storage,
    fileFilter: (request: Request, file: Express.Multer.File, cb) => {
        if(file.mimetype !== "image/jpeg") {
            return cb(null, false)
        }
        return cb(null, true)
    }
}) 

export default multerConfig