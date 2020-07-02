import Mask from '../schemas/Mask';

class ListController {
  async index(req, res) {
    const { id } = req.params;
    const response = await Mask.find({
      id,
    });

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { user_name } = req.body;

    const mask = await Mask.findOne({
      id,
    });

    if (!mask) {
      res.status(500).json({ error: 'Máscara não cadastrada' });
    }

    await Mask.update(
      { id },
      {
        user_name,
      }
    );

    const newMask = await Mask.findOne({
      id,
    });

    return res.json(newMask);
  }
}

export default new ListController();
