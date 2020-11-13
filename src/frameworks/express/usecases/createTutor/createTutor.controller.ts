import { Request, Response } from 'express'

import { CreateTutorInput } from '@/app/createtutor/createtutor.in';
import { CreateTutorInteractor } from '@/app/createtutor/createturor.interactor'
import { CreateTutorValidator } from '@/app/createtutor/createtutor.validator';
import { Json } from 'sequelize/types/lib/utils';

class CreateTutorController {
  async create(request: Request, response: Response) {
    try {

      try {
        JSON.stringify(request.body);
      } catch (error) {
        return response.status(400).json({
          message: 'invalid data format',
          error
        })
      }

      const {
        name,
        email,
        rg,
        cpf,
        phone,
        cep,
        whatsapp,
        street,
        number,
        area,
        complement,
      } = request.body;

      if (!name || !email || !rg || !cpf || !phone || !cep) {
        return response.status(400).json({
          error: "mandatory fields not filled"
        })
      }

      const tutor: CreateTutorInput = {
        name,
        email,
        rg,
        cpf,
        phone,
        cep,
        whatsapp,
        street,
        number,
        area,
        complement,
      }

      let validator: CreateTutorValidator;
      let errorFactory;
      let repository;
      let interactor: CreateTutorInteractor;

      validator = {
        validate: () => {
          return { valid: true, error: {} };
        },
      };

      errorFactory = {
        getError: () => new Error('test'),
      };

      repository = {
        saveTutor: async () => Promise.resolve(true),
      };

      interactor = new CreateTutorInteractor(
        validator,
        errorFactory,
        repository
      );

      const out = await interactor.execute(tutor);
      response.json(out);
    } catch (error) {
      return response.status(400).json({
        message: '',
        error
      })
    }
  }
}

export default CreateTutorController;