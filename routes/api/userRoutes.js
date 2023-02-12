const router = require('express').Router();
const { User } = require('../../models');

//localhost:3000/api/users/
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//localhost:3000/api/users/
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});