import { Entity } from '../../infra/typeorm/entities/entity';

export interface Model {
  toEntity(): Entity;
}
