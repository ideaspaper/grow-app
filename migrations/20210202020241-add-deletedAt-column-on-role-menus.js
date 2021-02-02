'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('RoleMenus', 'deletedAt', Sequelize.DATE, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('RoleMenus', 'deletedAt', {});
  }
};