import { Specie } from "../db/models";

export default {
  async index(req, res) {
    try {
      const species = await Specie.findAll();

      if (!species) {
        return res.status(400).json({
          message: "Species does not exists",
        });
      }

      return res.json(species);
    } catch (error) {
      return res.json(error);
    }
  },
};
