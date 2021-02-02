const { Post, User } = require('./../models');
const validationErrorMessages = require('./../helpers/validationErrorMessages');

class WriteController {
  static getWrite(req, res) {
    req.session.pageAt = 'write';
    res.render('write', { errorMessages: req.query.errorMessages, sess: req.session });
  }
  static postWrite(req, res) {
    Post.create({
      title: req.body.title || '',
      verse: req.body.verse || '',
      content: req.body.content || '',
      UserId: req.session.userid
    })
      .then(() => {
        res.redirect('/posts');
      })
      .catch((err) => {
        try {
          const errorMessages = validationErrorMessages(err);
          res.redirect(`/write?errorMessages=${errorMessages.join()}`);
        } catch {
          req.session.pageAt = 'error';
          res.render('error', { sess: req.session });
        }
      });
  }

  static getEditWrite(req, res) {
    Post.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.userid
      },
      include: [User]
    })
      .then((data) => {
        if (data) {
          req.session.pageAt = 'edit';
          res.render('writeEdit', { errorMessages: req.query.errorMessages, data: data, sess: req.session });
        } else {
          throw 'No data';
        }
      })
      .catch((err) => {
        res.render('error', { sess: req.session });
      });
  }
  static postEditWrite(req, res) {
    Post.update({
      title: req.body.title || '',
      verse: req.body.verse || '',
      content: req.body.content || ''
    }, {
      where: {
        id: req.params.id,
        UserId: req.session.userid
      },
      include: [User]
    })
      .then((data) => {
        if (data[0]) {
          res.redirect('/posts');
        } else {
          throw 'Not allowed';
        }
      })
      .catch((err) => {
        res.render('error', { sess: req.session });
      });
  }
}

module.exports = WriteController;
