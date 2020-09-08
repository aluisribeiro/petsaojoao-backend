import { ValidatorResult } from '../core/definitions/validator-result';
import { CreateTutorValidator } from './createtutor.validator';
import { CreateTutorInput } from './createtutor.in';

export class CreateTutorValidatorImpl implements CreateTutorValidator{

  validate(request: CreateTutorInput): ValidatorResult{

    return { valid: true, error: {} };
  }
}
