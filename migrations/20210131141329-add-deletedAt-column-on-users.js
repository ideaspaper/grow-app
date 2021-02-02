'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'deletedAt', Sequelize.DATE, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'deletedAt', {});
  }
};