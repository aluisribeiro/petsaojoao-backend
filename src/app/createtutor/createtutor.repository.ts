import { Tutor } from '../../core/entities/tutor';

export interface CreateTutorRepository {
  saveTutor(user: Tutor): Promise<boolean>;
}