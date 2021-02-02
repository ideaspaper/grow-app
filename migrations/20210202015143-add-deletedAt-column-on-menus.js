'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'deletedAt', Sequelize.DATE, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Menus', 'deletedAt', {});
  }
};