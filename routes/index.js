
const router = require('express').Router();
const homeController = require('../controllers/homeController');
const apiRoutes = require('./api');

//localhost:3001/api
router.use('/api', apiRoutes);

//router.post('/post', )

//router.post('/comment', homeController.post);

router.get('/', homeController.get);
module.exports = router;