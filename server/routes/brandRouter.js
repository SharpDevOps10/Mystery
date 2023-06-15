'use strict';

const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
  // Handle the logic for creating a new brand
  res.send('Create a new brand');
});

router.get('/', (req, res) => {
  // Handle the logic for retrieving all brands
  res.send('Get all brands');
});

module.exports = router;
