'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('./../helpers/bcryptHelper');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: 'UserId'
      });
      User.belongsTo(models.Role, {
        foreignKey: 'RoleId',
        targetKey: 'id'
      });
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name cannot be empty'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Last name cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Wrong email format'
        }
      }
    },
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true
  });
  User.beforeCreate((instance) => {
    instance.RoleId = 1;
    return hash(instance.password)
      .then((data) => {
        instance.password = data;
      });
  });
  return User;
};