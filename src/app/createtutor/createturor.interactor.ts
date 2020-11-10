import { Interactor } from '../../core/definitions/interactor';
import { ApplicationErrorFactory } from '../../core/definitions/application-error-factory';
import { CreateTutorInput } from './createtutor.in';
import { CreateTutorOutput } from './createtutor.out';
import { CreateTutorRepository } from './createtutor.repository';
import { CreateTutorValidator } from './createtutor.validator';
import { ErrorType } from '../../core/definitions/error-type';

export class CreateTutorInteractor implements Interactor {
  constructor(
    private validator: CreateTutorValidator,
    private errorFactory: ApplicationErrorFactory,
    private repository: CreateTutorRepository,
  ) { }

  async execute(input: CreateTutorInput): Promise<CreateTutorInput> {
    const result = this.validator.validate(input);

    if (!result.valid) {
      throw this.errorFactory.getError(ErrorType.validation, result.error);
    }

    return Promise.resolve({
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

    } as CreateTutorOutput);

  }
}
