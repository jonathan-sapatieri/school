'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'People',
			[
				{
					name: 'Ana Clara Pegoraro',
					active: true,
					email: 'ana.pegoraro@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Beatriz Oliveira Machado',
					active: true,
					email: 'beatriz.machadok@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Carlos Alberto Teodoro',
					active: true,
					email: 'carlos.teodoro@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Diogo Pererira Svichek',
					active: true,
					email: 'diogo.svichek@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Fabrício Montenaro',
					active: true,
					email: 'fabricio.montenaro@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'João Aparecido da Silva',
					active: true,
					email: 'joao.silva@school.com.br',
					role: 'Teacher',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Maria Joana Martinês',
					active: true,
					email: 'maria.martines@school.com.br',
					role: 'Teacher',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Paulo Vasconcelos',
					active: true,
					email: 'paulo.vasconcelos@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Rafaela Fernandes',
					active: true,
					email: 'fafaela.fernandes@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Tatiana Gonçalves',
					active: true,
					email: 'tatiana.goncalvess@school.com.br',
					role: 'Student',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('People', null, {});
	},
};
