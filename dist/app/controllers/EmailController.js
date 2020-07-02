"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Email = require('../schemas/Email'); var _Email2 = _interopRequireDefault(_Email);

class EmailController {
  async index(req, res) {
    const emails = await _Email2.default.find();
    return res.json(emails);
  }

  async store(req, res) {
    const { em } = req.body;

    const emailExists = await _Email2.default.findOne({
      email: em,
    });

    if (emailExists) {
      return res.json({ error: 'Email já cadastrado!' });
    }

    await _Email2.default.create({
      email: em,
    });

    const retorno = await _Email2.default.find({
      email: em
    });

    return res.json(retorno);
  }
}

exports. default = new EmailController();
