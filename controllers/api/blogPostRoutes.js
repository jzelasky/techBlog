const router = require('express').Router();
const { BlogPost, Comment } = require('../../models')

// /api/posts endpoint

router.get('/', async (req, res) => {
    try {
        const bpData = await 
        BlogPost.findAll({
            include: [{model: Comment}]
        });
        res.status(200).json(bpData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
      const bpData = await 
      BlogPost.findByPk(req.params.id, {
        include: [{model: Comment}],
      });
      if (!bpData){
        res.status(404).json({ message: 'No blog post found with that id!'});
      }
      res.status(200).json(bpData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req,res) => {
    try {
        const bpData = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        })
        res.status(200).json(bpData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
      const blogPost = await BlogPost.update ({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      },
      {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(blogPost);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const bpData = await BlogPost.destroy({
        where: {
          id: req.params.id,
        }
      });
      if (!bpData) {
        res.status(404).json ({ message: 'No blog post found with that id!'});
        return;
      }
      res.status(200).json(bpData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;