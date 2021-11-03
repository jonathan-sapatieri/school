'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Registrations', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
			},
			class_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Classes', key: 'id' },
			},
			student_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'People', key: 'id' },
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
		await queryInterface.dropTable('Registrations');
	},
};
