'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('RoleMenus', {
      fields: ['RoleId'],
      type: 'foreign key',
      name: 'custom_fkey_roleid_on_rolemenus',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
      .then(() => {
        queryInterface.addConstraint('RoleMenus', {
          fields: ['MenuId'],
          type: 'foreign key',
          name: 'custom_fkey_menuid_on_rolemenus',
          references: {
            table: 'Menus',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      });
  },
  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('RoleMenus', 'custom_fkey_roleid_on_rolemenus')
    .then(() => {
      queryInterface.removeConstraint('RoleMenus', 'custom_fkey_menuid_on_rolemenus')
    });
  }
};
