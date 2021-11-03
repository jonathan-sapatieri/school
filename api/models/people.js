'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class People extends Model {
		static associate(models) {
			People.hasMany(models.Classes, {
				foreignKey: 'teacherId',
				as: 'teachers',
			});
			People.hasMany(models.Registrations, {
				foreignKey: 'studentId',
				as: 'students',
			});
		}
	}
	People.init(
		{
			name: DataTypes.STRING,
			active: DataTypes.BOOLEAN,
			email: DataTypes.STRING,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'People',
			tableName: 'People',
			underscored: true,
		}
	);
	return People;
};
