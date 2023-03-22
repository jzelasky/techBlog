const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');

// root enpoint

router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.findAll()
    console.log(posts)
    res.render('homepage', {
      logged_in: req.session.logged_in,
      posts: posts
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
