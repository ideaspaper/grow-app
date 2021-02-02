'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleMenu extends Model {
    static associate(models) {
      // define association here
    }
  };
  RoleMenu.init({
    MenuId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoleMenu',
    paranoid: true
  });
  return RoleMenu;
};