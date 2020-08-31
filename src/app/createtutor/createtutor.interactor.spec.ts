import { CreateTutorValidatorImpl } from './createtutor.validator.impl';
import { CreateTutorInput } from './createtutor.in';
import { CreateTutorOutput } from './createtutor.out';
import { CreateTutorInteractor } from './createturor.interactor';
import { CreateTutorValidator } from './createtutor.validator';
import { ValidatorResult } from '../core/definitions/validator-result';
import { CreateTutorRepository } from './createtutor.repository';
import { ApplicationErrorFactory } from '../core/definitions/application-error-factory';
import { CustomError } from '../core/definitions/custom-error';
import { Err } from '../core/definitions/err';
import { Tutor } from '../core/entities/tutor';

function isCreateTutorOutput(output: CreateTutorOutput): output is CreateTutorOutput {
  return (output as CreateTutorOutput) !== undefined;
}

describe('create tutor', () => {

    let validator: CreateTutorValidator;
    let errorFactory;
    let repository;
    let interactor: CreateTutorInteractor;

    beforeEach(() => {
      validator = {
        validate: jest.fn(() => {
          return { valid: true, error: {} };
        }),
      };

      errorFactory = {
        getError: jest.fn(() => new Error('test')),
      };

      repository = {
        saveTutor: jest.fn(async () => Promise.resolve(true)),
      };

      interactor = new CreateTutorInteractor(
        validator,
        errorFactory,
        repository
      );

    });

    describe('execute', () => {

        it('should validate ', async () => {

          const result = await interactor.execute({
            name: 'Anderson',
            email: 'xxx',
            rg: '',
            cpf: '',
            phone: '',
            cep: '',
            whatsapp: '',
            street: '',
            number: '',
            area: '',
            complement: '',
          });

          expect(validator.validate).toHaveBeenCalled();

        });

      });
});