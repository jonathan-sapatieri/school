'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Levels',
			[
				{
					name: 'Basic',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Intermediate',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Advanced',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Levels', null, {});
	},
};
