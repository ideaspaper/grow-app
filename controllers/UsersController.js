const { User, Role, Menu } = require('./../models');
const { compare } = require('./../helpers/bcryptHelper');
const validationErrorMessages = require('./../helpers/validationErrorMessages');

class UserController {
  // Register
  static getRegister(req, res) {
    req.session.pageAt = 'userRegister';
    res.render('userRegister', { errorMessages: req.query.errorMessages, sess: req.session });
  }
  static postRegister(req, res) {
    User.create({
      username: req.body.username || '',
      password: req.body.password || '',
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || '',
      email: req.body.email || ''
    })
      .then(() => {
        res.redirect('/user/login');
      })
      .catch((err) => {
        try {
          const errorMessages = validationErrorMessages(err);
          res.redirect(`/user/register?errorMessages=${errorMessages.join()}`);
        } catch {
          req.session.pageAt = 'error';
          res.render('error', { sess: req.session });
        }
      });
  }

  // Edit
  static getEdit(req, res) {
    User.findOne({
      where: {
        id: req.session.userid
      }
    })
      .then((data) => {
        req.session.pageAt = 'userEdit';
        res.render('userEdit', { errorMessages: req.query.errorMessages, data: data, sess: req.session });
      });
  }
  static postEdit(req, res) {
    User.update({
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || '',
      email: req.body.email || '',
    }, {
      where: {
        id: req.session.userid
      }
    })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        try {
          const errorMessages = validationErrorMessages(err);
          res.redirect(`/user/edit?errorMessages=${errorMessages.join()}`);
        } catch {
          req.session.pageAt = 'error';
          res.render('error', { sess: req.session });
        }
      });
  }

  // Login
  static getLogin(req, res) {
    req.session.pageAt = 'login';
    res.render('login', { errorMessages: req.query.errorMessages, sess: req.session });
  }
  static postLogin(req, res) {
    const sess = req.session;
    let user = {};
    User.findOne({
      where: {
        username: req.body.username
      },
      include: [Role]
    })
      .then((data) => {
        if (data) {
          user = data;
          return compare(req.body.password, data.password);
        } else {
          res.redirect('login?errorMessages=Wrong username/password');
        }
      })
      .then((result) => {
        if (result) {
          return Role.findOne({
            where: {
              id: user.Role.id
            },
            include: [Menu]
          });
        } else {
          res.redirect('login?errorMessages=Wrong username/password');
        }
      })
      .then((data) => {
        sess.userid = user.id;
        sess.username = user.username;
        sess.menus = data.Menus;
        res.redirect('/');
      })
      .catch((err) => {
        res.render('error', { sess: req.session });
      });
  }

  // Logout
  static getLogout(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = UserController;
