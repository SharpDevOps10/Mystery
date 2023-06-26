'use strict';

const { Router } = require('express');
const router = Router();
const basketController = require('../controllers/basketController');

router.get('/:id', basketController.getAll);

module.exports = router;
