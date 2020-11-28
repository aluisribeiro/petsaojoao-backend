import { Validator } from '../core/definitions/validator';
import { ValidatorResult } from '../core/definitions/validator-result';

import { SavePetImageInput } from './savepetimage.in';

export interface SavePetImageValidator extends Validator<SavePetImageInput> {
  validate(request: SavePetImageInput): ValidatorResult;
}
