'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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