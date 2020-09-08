import { ID } from '../core/definitions/id';
import { Output } from '../core/definitions/output';

export interface CreateTutorOutput extends Output {
  id: number,
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