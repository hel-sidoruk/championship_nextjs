const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/UserController');

router.get('/auth', userController.check);
router.post('/login', userController.login);

module.exports = router;
