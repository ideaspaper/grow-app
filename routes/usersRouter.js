const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController');
const authentication = require('./../middlewares/authentication');
const isNotLoggedIn = require('../middlewares/isNotLoggedIn');

router.get('/register', UserController.getRegister);
router.get('/login', isNotLoggedIn, UserController.getLogin);
router.get('/edit', authentication, UserController.getEdit);
router.get('/logout', UserController.getLogout);

router.post('/register', UserController.postRegister);
router.post('/login', isNotLoggedIn, UserController.postLogin);
router.post('/edit', authentication, UserController.postEdit);

module.exports = router;
