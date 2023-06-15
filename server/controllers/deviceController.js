'use strict';
const uuid = require('uuid');
const path = require('node:path');
const { Device } = require('../models/models');
const apiError = require('../errors/apiError');
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({
        name, price, brandId, typeId, img: fileName
      });

      return res.json(device);
    } catch (error) {
      next(apiError.errorRequest(error.message));
    }
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }
}

module.exports = new DeviceController();
