const express = require('express');
const router = express.Router();
const postsController = require('./../controllers/PostsController');
const authentication = require('./../middlewares/authentication');

router.get('/', authentication, postsController.findAll);

module.exports = router;
