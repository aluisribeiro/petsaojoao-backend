import { Specie } from "../db/models";

export default {
  async index(req, res) {
    const { specieId } = req.params;
    try {
      const specie = await Specie.findByPk(specieId);

      if (!specie) {
        return res.status(400).json({ message: "Specie does not exists" });
      }

      const breeds = await specie.getBreeds();

      if (!breeds) {
        return res.status(400).json({ message: "Specie has no breeds" });
      }

      return res.json(breeds);
    } catch (error) {
      return res.json(error);
    }
  },
};
