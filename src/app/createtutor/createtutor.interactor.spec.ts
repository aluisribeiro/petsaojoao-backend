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

    it('should works', async () => {

      const result = await interactor.execute({
        name: "cesar",
        email: "cesar@hotmail.com",
        rg: "12.345.678-9",
        cpf: "123.456.789-10",
        phone: "123456789",
        cep: "13990000",
        whatsapp: "987654321",
        street: "Rua dos Alfeneiros",
        number: "04",
        area: "Surrey",
        complement: ""
      });

      const expected = {
        name: "cesar",
        email: "cesar@hotmail.com",
        rg: "12.345.678-9",
        cpf: "123.456.789-10",
        phone: "123456789",
        cep: "13990000",
        whatsapp: "987654321",
        street: "Rua dos Alfeneiros",
        number: "04",
        area: "Surrey",
        complement: ""
      } as CreateTutorOutput;

      expect(validator.validate).toHaveBeenCalled();
      expect(expected).toEqual(result);

    });

  });
});