const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//http://localhost:3001/api/posts/
router.get('/', async (req,res) => {
    try{
         const postData = await Post.findAll({include: [{model: User}]});
        // const dataForPosts = postData.map((data) => data.get({plain: true}));
        // const posts = dataForPosts.map((data) => {
        //     return {
        //         post_id: data.id,
        //         post_title: data.post_title,
        //         post_text: data.post_text,
        //         timestamp: data.createdAt,
        //         user: data.user.username
        //     };
        // });
        // const exampleData = await Post.findAll({include: [{model: User}, {model: Comment, include: [{model: User}]
        //     //attributes: ['username'],
        // }],
        // });
        // console.log(exampleData);
        // res.render('home', {
        //     posts
        // })
        res.status(200).json(postData);
    } catch(err){
        res.status(500).json(err);
    }
});
//http://localhost:3001/api/posts/
router.post('/', async (req, res) => {
    try{
        const post_title = req.body.postTitle;
        const post_text = req.body.postContent;
        const user_id = 1; //req.session.user_id
        const createData = {post_title, post_text, user_id};
        const postData = await Post.create(createData);
        res.status(200).json(postData); 
    } catch(err){
        res.status(500).json(err);
    }
});
//http://localhost:3001/api/posts/:id
router.delete('/:id', async (req, res) => {
    try{
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            },
        });
        if(!postData) {
            res.status(404).json({message: "No post with this id!"});
            return;
        }
        res.status(200).json(postData);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;