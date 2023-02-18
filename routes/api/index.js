const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');


//localhost:3000/api/users
router.use('/users', userRoutes);
//localhost:3000/api/posts
router.use('/posts', postRoutes);
//localhost:3000/api/comments
router.use('/comments', commentRoutes);

module.exports = router;