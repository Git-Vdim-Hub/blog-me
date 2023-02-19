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
})

module.exports = router;