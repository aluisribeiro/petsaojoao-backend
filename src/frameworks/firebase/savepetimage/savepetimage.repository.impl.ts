import { ValidatorResult } from "@/app/core/definitions/validator-result";
import { PetImage } from "@/app/core/entities/petimage";
import { SavePetImageRepository } from "@/app/savepetimage/savepetimage.repository";

import { Firebase } from "@/frameworks/firebase/connection.firebase" 

export class SavePetImagesImpl implements SavePetImageRepository{
  savePetImage(request: PetImage): ValidatorResult{
    
    const { petId, petImage } = request
    const firebase = new Firebase
    
    // connectFirebase
    firebase.createConnection()

    // connectBucket
    firebase.connectToBucket


    // uploadBucket
    const { filename, path } = petImage

    const destination = `pets/${petId}/`
    
    firebase.saveBucket(filename, path, destination)
    
    firebase.closeConnection()

    return { valid: true, error: {} }

  };
}