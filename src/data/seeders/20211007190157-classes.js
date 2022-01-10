'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Classes',
			[
				{
					teacher_id: 6,
					level_id: 1,
					start_date: new Date(2021, 10, 1),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					teacher_id: 6,
					level_id: 2,
					start_date: new Date(2022, 1, 1),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					teacher_id: 6,
					level_id: 3,
					start_date: new Date(2021, 12, 1),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					teacher_id: 7,
					level_id: 1,
					start_date: new Date(2021, 11, 1),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					teacher_id: 7,
					level_id: 2,
					start_date: new Date(2021, 9, 1),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Classes', null, {});
	},
};
