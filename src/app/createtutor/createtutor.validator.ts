import { Validator } from '../core/definitions/validator';
import { ValidatorResult } from '../core/definitions/validator-result';

import { CreateTutorInput } from './createtutor.in';

export interface CreateTutorValidator extends Validator<CreateTutorInput> {
  validate(request: CreateTutorInput): ValidatorResult;
}
