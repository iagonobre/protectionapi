import Mask from '../schemas/Mask';

class MaskController {
  async index(req, res) {
    const masks = await Mask.find();

    const totalMasks = await Mask.count();
    const totalActive = await Mask.count({ status: 1 });
    const totalUse = await Mask.count({ use: 1 });

    const result = {
      totalActive,
      totalUse,
      totalMasks,
      masks
    };
    return res.json(result);
  }
}

export default new MaskController();
