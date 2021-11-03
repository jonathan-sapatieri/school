'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Registrations',
			[
				{
					status: '',
					class_id: 1,
					student_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 1,
					student_id: 2,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 1,
					student_id: 3,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 4,
					student_id: 4,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 4,
					student_id: 5,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 5,
					student_id: 8,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 5,
					student_id: 9,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: '',
					class_id: 5,
					student_id: 10,
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Registrations', null, {});
	},
};
