'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      fs.readFile('./seeders/menus.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const time = new Date();
          const objects = JSON.parse(data).map((element) => {
            element.createdAt = time;
            element.updatedAt = time;
            return element;
          });
          resolve(queryInterface.bulkInsert('Menus', objects, {}));
        }
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Menus', objects, {});
  }
};
