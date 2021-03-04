const router = require('express').Router();
const User = require('../controllers/user');
const authenticate = require('../middlewares/auth');

router.post('/register', User.register);
router.post('/login', User.login);
router.use(authenticate);

module.exports = router