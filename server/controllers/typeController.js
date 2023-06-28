'use strict';

const { Type } = require('../models/models');
const apiError = require('../errors/apiError');
class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res, next) {
    const { name } = req.body;
    const existingType = await Type.findOne({ where: { name } });
    if (existingType) {
      return next(apiError.errorRequest('This type exists'));
    }
    const type = await Type.create({ name });
    return res.json(type);
  }
}

module.exports = new TypeController();
