//controller to handle the rendering of dashboard components
const {User, Post} = require('../models');
//pulls data from the database and renders it through views/handlebars
exports.get = async (req, res) =>{
    try{
        if(req.session.loggedIn){
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
        } else{
            res.render('logIn')
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
//gets one post from the database and renders through handlebars
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
//renders a page to create a new page
exports.getNew = async (req,res) => {
    try{
        res.render('newPost');
    } catch(err){
        res.status(500).json(err);
    }
};

// if(req.session.loggedIn){
// } else {
//     res.render('logIn')
// }