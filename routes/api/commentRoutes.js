const router = require('express').Router();
const { Comment } = require('../../models');

//localhost:3000/api/comments/
router.get('/', async (req, res) => {
    try{
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//localhost:3000/api/comments/
router.post('/', async (req, res) => {
    try{
        const comment_text = req.body.comment;
        const user_id = req.session.user_id;
        const post_id = req.body.postId;
        const createData = {comment_text, user_id, post_id};
        const commentData = await Comment.create(createData);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;