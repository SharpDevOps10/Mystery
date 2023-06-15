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
      await img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({
        name, price, brandId, typeId, img: fileName
      });

      return res.json(device);
    } catch (error) {
      next(apiError.errorRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.body;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId }, limit, offset
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId }, limit, offset
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId }, limit, offset
      });
    }
    return res.json(devices);

  }

  async getOne(req, res) {

  }
}

module.exports = new DeviceController();
