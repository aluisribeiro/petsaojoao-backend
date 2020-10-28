import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tutor } from '../../../core/entities/tutor';


import Tutors from '../../models/Tutors';


class TutorController {
    async store(req: Request, res: Response) {
        console.log(req);






    }
}
export default new TutorController();