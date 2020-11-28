import { Interactor } from '../core/definitions/interactor';
import { ApplicationErrorFactory } from '../core/definitions/application-error-factory';

import { SavePetImageInput } from './savepetimage.in';
import { SavePetImageOutput } from './savepetimage.out';
import { SavePetImagesImpl } from '../../frameworks/firebase/savepetimage/savepetimage.repository.impl';
import { SavePetImageValidator } from './savepetimage.validator';
import { ErrorType } from '../core/definitions/error-type';

export class SavePetImageInteractor implements Interactor {
    constructor(
        private validator: SavePetImageValidator,
        private repository: SavePetImagesImpl,
    ) {}

    async execute(input: SavePetImageInput): Promise<SavePetImageOutput> {
        const result = this.validator.validate(input);

        if(!result.valid){
            return Promise.resolve({
                valid: result.valid,
                message: `${result.error}`
            } as SavePetImageOutput) 
        }

        this.repository.savePetImage(input)

        return Promise.resolve({
            message: 'Success! Image saved.'
        } as SavePetImageOutput);
    }
}