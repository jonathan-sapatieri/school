'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Classes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			teacher_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'People', key: 'id' },
			},
			level_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Levels', key: 'id' },
			},
			start_date: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Classes');
	},
};
