'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'deletedAt', Sequelize.DATE, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'deletedAt', {});
  }
};