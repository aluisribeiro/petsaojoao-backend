import {Input} from '../core/definitions/input';

export interface SavePetImageInput extends Input {
    petId: number,
    petImage: File,
}