import models from "../db/models";
import FirebaseCloudMessaging from "../services/FirebaseCloudMessaging";

class FoundPetController {
  async store(req, res) {
    try {
      const found = await models.FoundPet.create(req.body);
      const sendMessage = await FirebaseCloudMessaging.sendMessage(found.id);

      return res.status(201).json(found);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
  async show(req, res) {
    const { id } = req.params;

    try {
      const fPet = await models.FoundPet.findByPk(id);

      if (!fPet) {
        return res.status(404).json({ error: "Pet not found!" });
      }

      return res.json(fPet);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new FoundPetController();
