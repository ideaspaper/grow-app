const { Post } = require('./../models');
const validationErrorMessages = require('./../helpers/validationErrorMessages');

class WriteController {
  static getWrite(req, res) {
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
      res.redirect('/');
    })
    .catch((err) => {
      try {
        const errorMessages = validationErrorMessages(err);
        res.redirect(`/write?errorMessages=${errorMessages.join()}`);
      } catch {
        res.render('error');
      }
    });
  }
}

module.exports = WriteController;
