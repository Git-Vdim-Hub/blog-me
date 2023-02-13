const {Comment} = require('../models');

const commentData = [
    {
		comment_text: "Hi Vadim, Bob here, welcome to the blog!",
		user_id: 2,
		post_id: 1,
	},
    {
		comment_text: "Welcome Vadim, Steve here, Express is no easy feat to master!",
		user_id: 3,
		post_id: 1,
	},
    {
		comment_text: "Welcome Steve, Bob here, API routes are not too!",
		user_id: 2,
		post_id: 3,
	},
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;