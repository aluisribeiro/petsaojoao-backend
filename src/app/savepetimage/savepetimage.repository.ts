import { ValidatorResult } from '../core/definitions/validator-result';
import {PetImage} from '../core/entities/petimage';

export interface SavePetImageRepository {
    savePetImage(petImage: PetImage): ValidatorResult;
}