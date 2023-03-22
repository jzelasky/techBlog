const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// root enpoint

router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.findAll()
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

router.get('/details/:id', withAuth, async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id, {
      include: [{model: User}]
    })
    
    const comments = await Comment.findAll({
      where: {
        blog_post_id: req.params.id
      },
      include: [{model: User}]
    })
    console.log(comments)
    res.render('details', {
      logged_in: req.session.logged_in,
      post: post,
      comments: comments
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
