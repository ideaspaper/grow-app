'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.INTEGER,
      allowNull: false
    }, {})
      .then(() => {
        queryInterface.addConstraint('Users', {
          fields: ['RoleId'],
          type: 'foreign key',
          name: 'custom_fkey_roleid_on_users',
          references: {
            table: 'Roles',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'RoleId', {});
  }
};