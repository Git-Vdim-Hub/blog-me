
const router = require('express').Router();
const homeController = require('../controllers/homeController');
const dashController = require('../controllers/dashController');
const logInController = require('../controllers/loginController');
const signUpController = require('../controllers/signUpController');
const apiRoutes = require('./api');

//localhost:3001/api
router.use('/api', apiRoutes);

//localhost:3001/dashboard/newPost
router.get('/dashboard/newPost', dashController.getNew );
//localhost:3001/dashboard/:id
router.get('/dashboard/:id', dashController.getOne );
//localhost:3001/dashboard
router.get('/dashboard', dashController.get );
//localhost:3001/login
router.get('/login', logInController.get);
//localhost:3001/signUp
router.get('/signUp', signUpController.get);
//localhost:3001/:id
router.get('/:id', homeController.getOne);
//localhost:3001/
router.get('/', homeController.get);

module.exports = router;