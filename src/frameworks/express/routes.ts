import { Router } from 'express';
import TutorController from '../../app/api/controllers/TutorController';



const router = Router();

router.post('/tutors', TutorController.store)

export default router;