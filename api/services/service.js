const models = require('../models');

class Service {
	constructor(modelName) {
		this.modelName = modelName;
		this.model = models[modelName];
	}

	async insert(data) {
		return await this.model.create(data);
	}

	async selectAll(where = {}) {
		return await this.model.findAll({ where: { ...where } });
	}

	async selectOne(where = {}) {
		return await this.model.findOne({ where: { ...where } });
	}

	async updateMany(where, data, transaction = {}) {
		return this.model.update(data, { where: { ...where } }, transaction);
	}

	async updateById(id, data) {
		await this.model.update(data, { where: { id: id } });
		return this.model.findByPk(id);
	}

	async deleteById(id) {
		return await models[this.modelName].destroy({ where: { id: id } });
	}
}

module.exports = Service;
