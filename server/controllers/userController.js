'use strict';
const apiError = require('../errors/apiError');
class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async checkAuthorization(req, res, next) {
    const { id } = req.query;
    if (!id) return next(apiError.errorRequest('No id'));
    res.json(id);
  }
}

module.exports = new UserController();
