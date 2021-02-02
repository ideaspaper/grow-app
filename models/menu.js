'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // define association here
      Menu.belongsToMany(models.Role, {
        through: 'RoleMenus'
      });
    }
  };
  Menu.init({
    menuName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
    paranoid: true
  });
  return Menu;
};