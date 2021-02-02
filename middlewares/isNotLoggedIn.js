function isNotLoggedIn(req, res, next) {
  if (req.session.userid) {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = isNotLoggedIn;
