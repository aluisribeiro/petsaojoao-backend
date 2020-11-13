import { Interactor } from '../core/definitions/interactor';
import { ApplicationErrorFactory } from '../core/definitions/application-error-factory';

import { CreateTutorInput } from './createtutor.in';
import { CreateTutorOutput } from './createtutor.out';
import { CreateTutorRepository } from './createtutor.repository';
import { CreateTutorValidator } from './createtutor.validator';
import { ErrorType } from '../core/definitions/error-type';

export class CreateTutorInteractor implements Interactor {
  constructor(
    private validator: CreateTutorValidator,
    private errorFactory: ApplicationErrorFactory,
    private repository: CreateTutorRepository,
  ) {}

  async execute(input: CreateTutorInput): Promise<CreateTutorInput> {
    const result = this.validator.validate(input);

    if (!result.valid) {
      throw this.errorFactory.getError(ErrorType.validation, result.error);
    }
    
    return Promise.resolve({ 
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
       
    } as CreateTutorOutput);

  }
}
