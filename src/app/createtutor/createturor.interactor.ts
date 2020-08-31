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

    // return true;

    return Promise.resolve({ 
       name: input.name,
       email: input.email,
       
    } as CreateTutorOutput);

//     const user = 

//     await this.repository.saveTutor(request);
// ß
//     if (!user) {
//       throw this.errorFactory.getError(ErrorType.userDoesNotExists, { id: request.userId });
//     }

//     try {
//       user.balance += request.value;
//       await this.depositRepository.saveUser(user);

//       const transaction = new Transaction(user, user, request.value, TRANSACTION_TYPES.DEPOSIT);

//       const transactionId = await this.depositRepository.createTransaction(transaction);

//       return Promise.resolve({ balance: user.balance, transactionId } as DepositOutput);
//     } catch (error) {
//       throw this.errorFactory.getError(ErrorType.deposit, error);
//     }
  }
}
