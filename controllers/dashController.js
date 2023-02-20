const {User, Post} = require('../models');

exports.get = async (req, res) =>{
    try{
        const postObjects = await Post.findAll({
            include: [
                {model: User}
            ],
            //where: {user_id: 1}
            where: { user_id: req.session.user_id }
        })
            const dataForPosts = postObjects.map((data) =>
            data.get({plain: true}));
            const userPosts = dataForPosts.map((data) =>{
                return {
                    post_id: data.id,
                    post_title: data.post_title,
                    post_text: data.post_text,
                    timestamp: data.createdAt,
                    user: data.user.username,
                    loggedIn: true
                };
            });
            res.render('dash', {
                userPosts
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getOne = async (req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id)
        const post = postData.get({plain: true});
        res.render('dashPost', {
            post
        })
    } catch(err){
        res.status(500).json(err);
    }
};

exports.getNew = async (req,res) => {
    try{
        res.render('newPost');
    } catch(err){
        res.status(500).json(err);
    }
};