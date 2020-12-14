import {Input} from '../core/definitions/input';

export interface SavePetImageInput extends Input {
    petId: number,
    petImage: {
        filename: string,
        path: string,
        size: number
    }
}