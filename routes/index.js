const express = require('express');
const router = express.Router();
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');
const writeRouter = require('./writeRouter');
const readRouter = require('./readRouter');
const { Post, User } = require('./../models');

router.use('/user', usersRouter);
router.use('/posts', postsRouter);
router.use('/write', writeRouter);
router.use('/read', readRouter);

// Home
router.get('/', (req, res) => {
  Post.findAll({
    order: [['createdAt', 'DESC']],
    limit: 5
  })
    .then((data) => {
      req.session.pageAt = 'home';
      res.render('home', { posts: data, sess: req.session });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;