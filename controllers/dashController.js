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
        if(postObjects.length > 0) {
            const dataForPosts = postObjects.map((data) =>
            data.get({plain: true}));
            res.render('dash');
        }
    } catch (err) {

    }
}