const { Post, Role, User } = require('./../models');

class PostsController {
  static findAll(req, res) {
    Post.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        UserId: req.session.userid
      }
    })
      .then((data) => {
        req.session.pageAt = 'posts';
        res.render('posts', { posts: data, sess: req.session });
      })
      .catch((err) => {
        req.session.pageAt = 'error';
        res.render('error', { sess: req.session });
      });
  }

  static findOneRead(req, res) {
    Post.findOne({
      where: {
        id: req.params.id
      },
      include: [User]
    })
      .then((data) => {
        req.session.pageAt = 'read';
        res.render('read', { data: data, sess: req.session });
      })
      .catch((err) => {
        req.session.pageAt = 'error';
        res.render('error', { sess: req.session });
      });
  }
}

module.exports = PostsController;
