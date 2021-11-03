'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Levels extends Model {
		static associate(models) {
			Levels.hasMany(models.Classes, {
				foreignKey: 'levelId',
				as: 'classes',
			});
		}
	}
	Levels.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Levels',
			tableName: 'Levels',
			scopes: {
				one: {},
				many: { attributes: { exclude: ['createdAt', 'updatedAt'] } },
			},
			underscored: true,
		}
	);
	return Levels;
};
