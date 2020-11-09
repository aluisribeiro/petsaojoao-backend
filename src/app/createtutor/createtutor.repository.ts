import { Tutor } from '../../infra/typeorm/entities/tutor';

export interface CreateTutorRepository {
  saveTutor(user: Tutor): Promise<boolean>;
}