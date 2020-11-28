import { ValidatorResult } from "@/app/core/definitions/validator-result";
import { CreateTutorValidator } from "@/app/createtutor/createtutor.validator";
import { CreateTutorInput } from "@/app/createtutor/createtutor.in";

import Ajv from "ajv";
const ajv = new Ajv();

export class AjvCreateTutorValidator implements CreateTutorValidator {
    validate(request: CreateTutorInput): ValidatorResult {
  
      // Here we are define what is standards of attributes
      const schema = {
        properties: {
          name: {
            type: "string",
            maxLength: 80,
            minLength: 3,
          },
          email: {
            type: "string",
            format: "email",
            maxLength: 100,
          },
          rg: { 
            type: "string", 
            minLength:6, 
            maxLength: 15, 
            unique: true
          },
          cpf: {
            type: "string",
            maxLength: 11,
            minLength: 11,
            pattern: "[0-9]{11}",
            unique: true,
          },
          phone: { 
            type: "string", 
            maxLength: 11, 
            minLength: 11
          },
          whatsapp: { 
            type: ["string", 'null'], 
            maxLength: 11, 
            minLength:11 
          },
          cep: {
            type: "string",
            maxLength: 8,
            minLength: 8,
            pattern: "1387*",
          },
          street: { 
            type: "string", 
            maxLength: 100,
            minLength: 3
          },
          number: { 
            type: ["string", 'null'], 
            maxLength: 5
          },
          area: { 
            type: ["string", 'null'], 
            maxLength: 100
          },
          complement: {
            type: ["string", 'null'],
            maxLength: 100,
          },
        },
        required: ["name", "email", "rg", "cpf", "cep", "street"],
      };
  
      let validation = ajv.validate(schema, request);
      // If the validation find something different than standards or CPF is not valid
      // it will return false

      if(!validation){
        return { valid: false, error: "There was some error" };
      }
      // ValidatorCPFImpl.validate(request)
      return { valid: true, error: {} };
    }
  }
  