const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//http://localhost:3001/api/posts/
router.get('/', async (req,res) => {
    try{
        const postData = await Post.findAll({include: [{model: User}, {model: Comment, include: [{model: User}]
            //attributes: ['username'],
        }],
        
        });
        res.status(200).json(postData);
    } catch(err){
        res.status(500).json(err);
    }
});
//http://localhost:3001/api/posts/
router.post('/', async (req, res) => {
    try{
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;