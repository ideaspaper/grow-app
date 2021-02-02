'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // define association here
      Role.hasMany(models.User, {
        foreignKey: 'RoleId',
        sourceKey: 'id'
      });
      Role.belongsToMany(models.Menu, {
        through: 'RoleMenus'
      });
    }
  };
  Role.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    paranoid: true
  });
  return Role;
};