const services = require('../services');
const { IdentifierNotFoundError } = require('../errors');

class Controller {
  constructor(serviceName) {
    this.serviceName = serviceName;
    this.service = services[`${serviceName}Service`];
  }

  async loadById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await this.service.selectOne({ id: id });
      if (data) {
        req[this.serviceName.toLowerCase()] = data;
        return next();
      }
      throw new IdentifierNotFoundError(id, this.serviceName);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { body } = req;
      const data = await this.service.insert(body);
      if (data) return res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  async readAll(req, res, next) {
    try {
      const data = await this.service.selectAll();
      if (data) return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async readById(req, res, next) {
    try {
      return res.status(200).json(req[this.serviceName.toLowerCase()]);
    } catch (error) {
      next(error);
    }
  }
  async updateById(req, res, next) {
    try {
      const { id } = req.params;
      const { body } = req;
      const isUpdated = await this.service.updateById(id, body);

      if (isUpdated) {
        const data = await this.service.selectOne({ id: id });
        return res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      const isDeleted = await this.service.deleteById(id);
      if (isDeleted) return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
