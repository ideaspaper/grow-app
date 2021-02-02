'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Roles', 'deletedAt', Sequelize.DATE, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Roles', 'deletedAt', {});
  }
};