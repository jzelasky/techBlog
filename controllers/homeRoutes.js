const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// root enpoint

router.get('/', async (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
