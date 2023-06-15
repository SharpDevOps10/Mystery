'use strict';

const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController.js');

router.post('/registration', userController.registration);

router.post('/login', userController.login);

router.get('/authorization', userController.checkAuthorization);

module.exports = router;
