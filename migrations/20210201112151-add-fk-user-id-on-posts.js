'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false
    }, {})
      .then(() => {
        queryInterface.addConstraint('Posts', {
          fields: ['UserId'],
          type: 'foreign key',
          name: 'custom_fkey_userid_on_posts',
          references: {
            table: 'Users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'UserId', {});
  }
};