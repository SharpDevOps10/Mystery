'use strict';

const { Router } = require('express');
const router = Router();

router.post('/registration', (req, res) => {
  res.send('Registration endpoint');
});

router.post('/login', (req, res) => {

  res.send('Login endpoint');
});

router.get('/authorization', (req, res) => {

  res.send('Authorization endpoint');
});

module.exports = router;
