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
    res.render('details', {
      logged_in: req.session.logged_in,
      post: post,
      comments: comments
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id)
    const posts = await BlogPost.findAll({ where: { user_id: req.session.user_id } });
    const user = await User.findByPk(req.session.user_id)
    res.render('dashboard', {
      logged_in: req.session.logged_in,
      posts: posts,
      user: user
    })
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/dashboard/new-post', async (req, res) => {
  try {
    res.render('createPost', {
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/dashboard/edit-post/:id', async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id)
    res.render('editPost', {
      logged_in: req.session.logged_in,
      post: post
    })
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
