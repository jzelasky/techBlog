const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes')

// /api endpoint

router.use('/users', userRoutes);
router.use('/posts', blogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
