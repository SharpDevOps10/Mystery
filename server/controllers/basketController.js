'use strict';

const { BasketDevice, Basket, Device } = require('../models/models');
const apiError = require('../errors/apiError');

class BasketController {
  async getAll(req, res, next) {
    const { id } = req.params;
    const userBasket = await Basket.findOne({ where: { userId: id } });
    if (userBasket) {
      const devices = await Device.findAll({
        include: { model: BasketDevice, where: { basketId: userBasket.id } },
      });
      return res.json(devices);
    } else {
      return next(apiError.errorRequest('The user was not found'));
    }
  }
}

module.exports = new BasketController();
