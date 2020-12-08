import { ValidatorResult } from "../core/definitions/validator-result";
import { ValidatorCPF } from "./validator.cpf"
import { CreateTutorInput } from "../createtutor/createtutor.in";


export class ValidatorCPFImpl implements ValidatorCPF{
    validate(request: CreateTutorInput):  ValidatorResult{

      const { cpf } = request;
      const blacklist: Array<String> = [
          '00000000000',
          '11111111111',
          '22222222222',
          '33333333333',
          '44444444444',
          '55555555555',
          '66666666666',
          '77777777777',
          '88888888888',
          '99999999999',
          '12345678909'
        ];
        
      let sum: number;
      let rest: number;

      // CPF can't be blacklisted
      if (blacklist.includes(cpf)) {
        return { valid: false, error: "Invalid CPF" } as ValidatorResult
      }
    
      sum = 0;

      // Here we will generate a multiplied number for each digit according of your position for check the tenth digit
      for(let i = 1; i <= 9; i++){
          sum += parseInt(cpf.substring(i - 1, i))* (11 - i)
      }

      rest = (sum * 10) % 11;

      if((rest === 10) || (rest === 11)){
          rest = 0
      }

      // Check if tenth digit is valid
      if( rest !== parseInt(cpf.substring(9,10))){
        return { valid: false, error: "Invalid CPF" } as ValidatorResult
      }

      sum = 0;

      // Here we will generate a multiplied number for each digit according of your position for check the eleventh digit
      for(let k = 1; k <= 10; k++){
          sum += parseInt(cpf.substring(k - 1, k)) * (12 - k)
      }

      rest = (sum * 10) % 11;
      if((rest === 10) || (rest === 11)){
          rest = 0;
      }

      // Check if eleventh digit is valid
      if (rest !== parseInt(cpf.substring(10, 11))) {
        return { valid: false, error: "Invalid CPF" } as ValidatorResult
      }

      return { valid: true, error: {} } as ValidatorResult
  }
}
  
