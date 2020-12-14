import express from 'express'

import CreateTutorController from './usecases/createTutor/createTutor.controller';
import SavePetImageController from './usecases/savePetImage/savePetImage.controller';

import Multer from '@/frameworks/multer/config.ts';

const routes = express.Router()

const multer = new Multer

const createTutor = new CreateTutorController();
const savePetImage = new SavePetImageController();

routes.get('/', (request, response) => {
  return response.send(`Hi Cesar`);
});

routes.post('/createTutor', createTutor.create);

routes.post('/savepetimage', multer.configuration().single('petImage'), savePetImage.create);

export default routes