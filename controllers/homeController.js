//handles rendering of home page

const {Post, User, Comment} = require('../models');

exports.get = async (req,res) => {
    try{
        const postData = await Post.findAll({include: [{model: User}]});
        const dataForPosts = postData.map((data) => data.get({plain: true}));
        const posts = dataForPosts.map((data) => {
            return {
                post_id: data.id,
                post_title: data.post_title,
                post_text: data.post_text,
                timestamp: data.createdAt,
                user: data.user.username
            };
        });
        res.render('home', {
            posts
        })
    } catch(err){
        res.status(500).json(err);
    }
};
//renders one post
exports.getOne = async (req,res) => {
    try{
        if(req.session.loggedIn){
            const postData = await Post.findByPk(req.params.id,{include: [{model: User},{model: Comment, include: [{model: User}]}
            ]});
            const post = postData.get({plain: true});
            res.render('post',{
                post
            })
        } else {
            res.render('logIn')
        }

    } catch (err) {
        res.status(500).json(err);
    }
}