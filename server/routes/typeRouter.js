'use strict';
const { Router } = require('express');
const router = Router();


router.post('/', (req, res) => {
  // Handle the logic for creating a new type
  res.send('Create a new type');
});

router.get('/', (req, res) => {
  // Handle the logic for retrieving all types
  res.send('Get all types');
});

module.exports = router;
