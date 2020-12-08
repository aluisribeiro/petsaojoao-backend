import { ValidatorResult } from "@/app/core/definitions/validator-result";
import { CreateTutorValidator } from "@/app/createtutor/createtutor.validator";
import { CreateTutorInput } from "@/app/createtutor/createtutor.in";
import { AjvCreateTutorValidator } from "@/frameworks/ajv/createtutor/createtutor.validator.ajv"
import { ValidatorCPFImpl } from "@/app/shared/cpf.validator.Imp"

export class CreateTutorValidatorImpl implements CreateTutorValidator {
  validate(request: CreateTutorInput): ValidatorResult {

    const validator = new AjvCreateTutorValidator
    const validateCPF = new ValidatorCPFImpl

    const cpfValidation = validateCPF.validate(request) 

    const Ajvalidation = validator.validate(request)

    if(!Ajvalidation.valid) return { valid: false, error: Ajvalidation.error } as ValidatorResult 
    if(!cpfValidation.valid) return { valid: false, error: cpfValidation.error } as ValidatorResult 

    return { valid: true, error: {} } as ValidatorResult
  }
}

