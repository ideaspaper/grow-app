'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: {
          name: 'UserId'
        }
      });
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title cannot be empty'
        }
      }
    },
    verse: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Verse cannot be empty'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Content cannot be empty'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'User ID cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
    paranoid: true
  });
  return Post;
};