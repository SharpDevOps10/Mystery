'use strict';

const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController.js');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registration', userController.registration);

router.post('/login', userController.login);

router.get('/authorization', authMiddleware ,userController.checkAuthorization);

module.exports = router;
