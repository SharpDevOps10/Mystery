'use strict';
const apiError = require('../errors/apiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => jwt.sign({
  id, email, role
},
process.env.SECRET_KEY,
{ expiresIn: '24h' }
);
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(apiError.errorRequest('Incorrect email or password'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(apiError.errorRequest('There is a user with this email'));
    }
    const hasPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hasPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(apiError.internalRequest('The user was not found'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(apiError.internalRequest('Wrong password!'));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async checkAuthorization(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
