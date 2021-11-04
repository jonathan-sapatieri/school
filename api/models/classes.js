'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate(models) {
      Classes.belongsTo(models.People, {
        foreignKey: 'teacherId',
        as: 'teacher',
      });
      Classes.belongsTo(models.Levels, {
        foreignKey: 'levelId',
        as: 'level',
      });
      Classes.hasMany(models.Registrations, {
        foreignKey: 'classId',
        as: 'registrations',
      });
    }
  }
  Classes.init(
    {
      teacherId: {
        type: DataTypes.INTEGER,
        field: 'teacher_id',
      },
      levelId: {
        type: DataTypes.INTEGER,
        field: 'level_id',
      },
      startDate: {
        type: DataTypes.DATE,
        field: 'start_date',
      },
    },
    {
      sequelize,
      modelName: 'Classes',
      tableName: 'Classes',
      underscored: true,
      defaultScope: {
        attributes: {
          exclude: ['teacherId', 'levelId', 'createdAt', 'updatedAt'],
        },
        include: ['teacher', 'level'],
      },
    }
  );
  return Classes;
};
