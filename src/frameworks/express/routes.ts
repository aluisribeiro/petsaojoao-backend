import express from 'express'

import CreateTutorController from './usecases/createTutor/createTutor.controller';

const routes = express.Router()

const createTutor = new CreateTutorController();

routes.get('/', (request, response) => {
  return response.send(`Hi Cesar`);
});

routes.post('/createTutor', createTutor.create);

export default routes