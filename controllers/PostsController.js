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
        res.render('posts', { posts: data, sess: req.session });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static findOneRead(req, res) {
    req.session.pageAt = 'read'
    Post.findOne({
      where: {
        id: req.params.id
      },
      include: [User]
    })
      .then((data) => {
        res.render('read', { data: data, sess: req.session });
      })
      .catch((err) => {
        res.render('error');
      });
  }
}

module.exports = PostsController;
