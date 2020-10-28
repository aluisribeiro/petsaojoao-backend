import { ID } from '../definitions/id';

import { Entity } from './entity';

export class Tutor implements Entity {
  id?: ID;

  constructor(
    private name: string,
    private email: string,
    private rg: string,
    private cpf: string,
    private phone: string,
    private cep: string,
    private whatsapp?: string,
    private street?: string,
    private number?: string,
    private area?: string,
    private complement?: string,
  ) {}
}
