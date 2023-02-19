const router = require('express').Router();
const {User} = require('../../models');
//localhost:3000/api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
//localhost:3000/api/users/signup
router.post('/signup', async (req, res) => {
  try{
    const userData = await User.create(req.body);
    res.status(200).json(userData);
} catch (err) {
    res.status(500).json(err);
}
});
//localhost:3000/api/users/login
router.post('/login', async (req, res) => {
  try{
    const userData = await User.findOne({
      where: {
        username: req.body.userInput
      }
    });
    if(!userData) {
      res.status(400).json({message: 'Incorrect email or password. Please try again.' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.passInput);
    console.log("VALID OR INVALID", validPassword);
    if(!validPassword){
      res.status(400).json({message: 'Incorrect email or password. PLease try again!'});
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!'});
    })
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;