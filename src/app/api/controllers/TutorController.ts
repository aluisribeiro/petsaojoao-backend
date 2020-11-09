import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tutor } from '../../../infra/typeorm/entities/tutor';


import Tutors from '../../../infra/typeorm/models/Tutors';


class TutorController {
    async store(req: Request, res: Response) {
        console.log(req);






    }
}
export default new TutorController();