import Mask from '../schemas/Mask';

class MaskController {
  async index(req, res) {
    const masks = await Mask.find();
    return res.json(masks);
  }
}

export default new MaskController();
