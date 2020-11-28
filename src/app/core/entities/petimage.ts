import { ID } from '../definitions/id';

import { Entity } from './entity';

export class PetImage implements Entity {
    id?: ID;

    constructor (
        public petId: number,
        public petImage: File
    ) {}
}