const express = require('express');
const router = express.Router();
const PostsController = require('./../controllers/PostsController');

router.get('/:id', PostsController.findOneRead);

module.exports = router;
