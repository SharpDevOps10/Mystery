'use strict';
const express = require('express');
const router = express.Router();

const deviceRouter = require('./deviceRouter.js');
const userRouter = require('./userRouter.js');
const brandRouter = require('./brandRouter.js');
const typeRouter = require('./typeRouter.js');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/basket', basketRouter);

module.exports = router;

