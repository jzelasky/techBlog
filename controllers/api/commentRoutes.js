const router = require('express').Router();
const { BlogPost, Comment } = require('../../models')

// /api/comments endpoint

router.get('/', async (req, res) => {
    try {
        const commentData = await 
        Comment.findAll({
            include: [{model: BlogPost}]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
      const commentData = await 
      Comment.findByPk(req.params.id, {
        include: [{model: BlogPost}],
      });
      if (!commentData){
        res.status(404).json({ message: 'No comment found with that id!'});
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req,res) => {
  console.log(res)
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            blog_post_id: req.body.content,
            user_id: req.session.user_id
        })
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
      const comment = await Comment.update ({
        content: req.body.content
      },
      {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        }
      });
      if (!commentData) {
        res.status(404).json ({ message: 'No blog post found with that id!'});
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;