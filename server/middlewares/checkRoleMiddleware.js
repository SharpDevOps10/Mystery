'use strict';

const jwt = require('jsonwebtoken');

const authMiddleware = (role) => (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'User is not authorized' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== role) {
      return res.status(403).json({ message: 'No permission' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'User is not authorized' });
  }
};

module.exports = authMiddleware;
