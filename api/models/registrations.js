'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Registrations extends Model {
    static associate(models) {
      Registrations.belongsTo(models.People, {
        foreignKey: 'studentId',
        as: 'student',
      });
      Registrations.belongsTo(models.Classes, {
        foreignKey: 'classId',
        as: 'class',
      });
    }
  }
  Registrations.init(
    {
      status: DataTypes.STRING,
      classId: {
        type: DataTypes.INTEGER,
        field: 'class_id',
      },
      studentId: {
        type: DataTypes.INTEGER,
        field: 'student_id',
      },
    },
    {
      sequelize,
      modelName: 'Registrations',
      tableName: 'Registrations',
      underscored: true,
    }
  );
  return Registrations;
};
