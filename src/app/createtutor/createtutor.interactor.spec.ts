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
import { ValidatorCPFImpl } from '../shared/cpf.validator.Imp';


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

        it('should works ', async () => {

          const result = await interactor.execute({
            name: 'Anderson',
            email: 'anderson_lr@hotmail.com',
            rg: '11.333.333-3',
            cpf: '444.444.444-23',
            phone: '19996578890',
            cep: '13880000',
            whatsapp: '19998764351',
            street: 'Rua Zonta',
            number: '12',
            area: 'Centro',
            complement: ''
          });

          const expected = {
            id: 1,
            name: 'Anderson',
            email: 'anderson_lr@hotmail.com',
            rg: '11.333.333-3',
            cpf: '444.444.444-23',
            phone: '19996578890',
            cep: '13880000',
            whatsapp: '19998764351',
            street: 'Rua Zonta',
            number: '12',
            area: 'Centro',
            complement: ''
            
         } as CreateTutorOutput;

          expect(validator.validate).toHaveBeenCalled();
          expect(expected).toEqual(result);

        });

    });

    describe("Validation received data", () => {
        it("It should check if the received data of tutor is valid", () => {


          let validator = new CreateTutorValidatorImpl

          const received = validator.validate({
            name: 'Fernando',
            email: 'fernando@hotmail.com',
            rg: '11.333.333-3',
            cpf: '97434986050',
            phone: '199998766666',
            cep: '13870010',
            whatsapp: '19998764351',
            street: 'Rua Zonta',
            number: '12',
            area: 'Centro',
            complement: ''
          });

          const expected = { valid: true, error: {} }

          expect(received).toEqual(expected);

        })


    } )
});