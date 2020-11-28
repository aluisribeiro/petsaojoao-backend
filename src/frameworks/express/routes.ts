import express from 'express'

import CreateTutorController from './usecases/createTutor/createTutor.controller';
import SavePetImageController from './usecases/savePetImage/savePetImage.controller';

import multer from 'multer';
import multerConfig from '@/frameworks/multer/config.ts';

const uploadMulter = multer(multerConfig);


const routes = express.Router()

const createTutor = new CreateTutorController();
const savePetImage = new SavePetImageController();

routes.get('/', (request, response) => {
  return response.send(`Hi Cesar`);
});

routes.post('/createTutor', createTutor.create);

routes.post('/savepetimage', uploadMulter.single('petImage'), savePetImage.create);

export default routes