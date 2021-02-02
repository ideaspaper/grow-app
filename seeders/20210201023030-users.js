'use strict';
const fs = require('fs');
const { hash } = require('./../helpers/bcryptHelper');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      fs.readFile('./seeders/users.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const time = new Date();
          const objects = JSON.parse(data).map((element) => {
            return hash(element.password)
              .then((data) => {
                element.password = data;
                element.createdAt = time;
                element.updatedAt = time;
                return element;
              });
          });
          Promise.all(objects)
            .then((data) => {
              resolve(queryInterface.bulkInsert('Users', data, {}));
            });
        }
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
  }
};
