import { ID } from '../core/definitions/id';
import { Input } from '../core/definitions/input';

export interface CreateTutorInput extends Input {
  name: string,
  email: string,
  rg: string,
  cpf: string,
  phone: string,
  cep: string,
  whatsapp: string,
  street: string,
  number: string,
  area: string,
  complement: string,
}