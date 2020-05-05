import { Router } from "express";
import TutorController from "./controllers/TutorController";
import PetController from "./controllers/PetController";
import PetPhotoController from "./controllers/PetPhotoController";
import SpecieController from "./controllers/SpecieController";
import BreedController from "./controllers/BreedController";

const routes = Router();

routes.post("/tutors", TutorController.store);

routes.post("/tutors/:tutorId/pets", PetController.store);
routes.get("/tutors/:tutorId/pets", PetController.index);

routes.post("/pets/:petId/photos", PetPhotoController.store);
routes.get("/pets/:petId/photos", PetPhotoController.index);

routes.get("/species", SpecieController.index);
routes.get("/species/:specieId/breeds", BreedController.index);

export default routes;
