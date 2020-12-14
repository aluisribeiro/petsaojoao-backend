import { Request, Response } from 'express';

import { SavePetImageInput } from '@/app/savepetimage/savepetimage.in';
import { SavePetImageInteractor } from '@/app/savepetimage/savepetimage.interactor';

import { SavePetImageValidatorImpl } from '@/app/savepetimage/savepetimage.validator.impl';

import { SavePetImagesImpl } from '@/frameworks/firebase/savepetimage/savepetimage.repository.impl';

class SavePetImageController {
  async create(request: Request, response: Response) {
    try {

      const savePetImageIn: SavePetImageInput = {
        petId: request.body.petId,
        petImage: {
          filename: request.file.filename,
          path:     request.file.path,
          size:     request.file.size
        }
      }

      const validator = new SavePetImageValidatorImpl
      const repository = new SavePetImagesImpl
      const interactor = new SavePetImageInteractor(
        validator,
        repository
      );

      const out = await interactor.execute(savePetImageIn);
      response.json(out);
    } 
    
    catch (error) {
      return response.status(400).json({
        message: '',
        error
      })
    }
  }
}

export default SavePetImageController;