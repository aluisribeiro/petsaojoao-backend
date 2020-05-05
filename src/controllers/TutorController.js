import { Tutor } from "../db/models";

export default {
  async store(req, res) {
    const { cpf } = req.body;
    try {
      const [tutor] = await Tutor.findOrCreate({
        where: { cpf },
        defaults: req.body,
      });

      return res.json(tutor);
    } catch (error) {
      return res.json(error);
    }
  },
};
