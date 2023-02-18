const {User, Post} = require('../models');

exports.get = async (req, res) =>{
    try{
        const postObjects = await Post.findAll({
            include: [
                {model: User}
            ],
            where: {user_id: 1}
            //where: { user_id: req.session.user_id }
        })
        //console.log(postObjects);
        if(postObjects.length > 0) {
            const dataForPosts = postObjects.map((data) =>
            data.get({plain: true}));
            //console.log(dataForPosts);
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
            //console.log(userPosts[0].post_title);
            res.render('dash', {
                userPosts
            });
        } else{
            return
            // const userNameObject = await User.findByPk(req.session.user_id);
            // const nameOfUser = userNameObject.dataValues.name;
            // res.render('home', {
            //   name: nameOfUser,
            //   home: true,
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

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
}

exports.getNew = async (req,res) => {
    try{
        res.render('newPost');
    } catch(err){
        res.status(500).json(err);
    }
}