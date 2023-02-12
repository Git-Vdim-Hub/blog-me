const {Post} = require('../models');

const postData = [
    {
		post_text: "Hello my name is Vadim and I love coding. If possible, I would like to find out more regarding back end development with sequelize",
		user_id: 1,
	},
    {
        post_text: "Besides Sequelize I am also interested in Express. All of these dependencies make coding much easier. One of the biggest struggles I have had so far is with API routes. Does anyone have any pointers on how to get better with API routes?",
        user_id: 1,
    },
    {
        post_text: "Hey all, Steve here. I have spent some time on front end and back end. The best place to be in my opinion is writing the API calls in between both worlds. Being a full-stack developer is great!",
        user_id: 3
     },
     {
        post_text: "Hello my name is Bob. I love working on front end! Most of the time I am using Tailwind and Bootstrap. Are there any other front end developers here?",
        user_id: 2
     },

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;