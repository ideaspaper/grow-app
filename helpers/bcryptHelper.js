const bcrypt = require('bcrypt');
const saltRounds = 10;

function hash(text) {
  return bcrypt.hash(text, saltRounds)
    .then((hash) => {
      return hash;
    })
    .catch((err) => {
      throw err;
    });
}

function compare(text, hash) {
  return bcrypt.compare(text, hash)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = {
  hash,
  compare
};
