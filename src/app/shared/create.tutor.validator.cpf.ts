import { Validator } from '../core/definitions/validator';
import { ValidatorResult } from '../core/definitions/validator-result';

import { CreateTutorInput } from '../createtutor/createtutor.in';

export interface ValidatorCPF extends Validator<CreateTutorInput> {
   validate(request: CreateTutorInput): ValidatorResult;
}
