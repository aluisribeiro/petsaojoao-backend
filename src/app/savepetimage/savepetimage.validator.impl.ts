import { Validator } from '../core/definitions/validator';
import { ValidatorResult } from '../core/definitions/validator-result';

import { SavePetImageInput } from './savepetimage.in';

export class SavePetImageValidatorImpl implements Validator<SavePetImageInput> {
  validate(request: SavePetImageInput): ValidatorResult{

    const { petId, petImage } = request
    const limitSize: number = process.env.LIMIT_SIZE

    if (!petId || !petImage) {
      return { valid: false, error: "mandatory fields not filled" }
    }

    if(petImage.size > limitSize ){
      return { valid: false, error: "Image limit exceeded"}
    }

    return { valid: true, error: {} }
  }
}
