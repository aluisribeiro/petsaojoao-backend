import { ID } from '../../../app/core/definitions/id';

import { Entity } from './entity';

export class Tutor implements Entity {
  id?: ID;

  constructor(
    public name: string,
    public email: string,
    public rg: string,
    public cpf: string,
    public phone: string,
    public cep: string,
    public whatsapp?: string,
    public street?: string,
    public number?: string,
    public area?: string,
    public complement?: string,
  ) { }
}
