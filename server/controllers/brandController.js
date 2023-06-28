'use strict';

const { Brand } = require('../models/models');
const apiError = require('../errors/apiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);

  }

  async getAll(req, res, next) {
    const { name } = req.body;
    const existingBrand = await Brand.findOne({ where: { name } });
    if (existingBrand) {
      return next(apiError.errorRequest('This brand exists'));
    }
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
}

module.exports = new BrandController();
