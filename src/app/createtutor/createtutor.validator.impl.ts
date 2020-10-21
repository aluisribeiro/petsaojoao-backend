import { ValidatorResult } from "../core/definitions/validator-result";
import { CreateTutorValidator } from "./createtutor.validator";
import { CreateTutorInput } from "./createtutor.in";

import Ajv from "ajv";
const ajv = new Ajv();

export class CreateTutorValidatorImpl implements CreateTutorValidator {
  validate(request: CreateTutorInput): ValidatorResult {
    const schema = {
      properties: {
        name: {
          type: "string",
          maxLength: 80,
        },
        email: {
          type: "string",
          format: "email",
          maxLength: 100,
        },
        rg: { type: "string", maxLength: 15, unique: true },
        cpf: {
          type: "string",
          maxLength: 11,
          pattern: "[0-9]{11}",
          unique: true,
        },
        phone: { type: "string", maxLength: 11 },
        whatsapp: { type: ["string", "null"], maxLength: 11 },
        cep: {
          type: "string",
          maxLength: 8,
          minLength: 8,
          pattern: "13870*",
        },
        street: { type: "string", maxLength: 100 },
        number: { type: ["string", "null"], maxLength: 30 },
        area: { type: ["string", "null"], maxLength: 100 },
        complement: {
          type: ["string", "null"],
          maxLength: 100,
        },
      },
      required: ["name", "email", "rg", "cpf", "cep", "street"],
    };

    let validation = ajv.validate(schema, request);

    if (!validation) return { valid: false, error: {} };

    return { valid: true, error: {} };
  }
}
