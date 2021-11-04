const Service = require('./service');

class PeopleService extends Service {
  constructor() {
    super('People');
  }

  async deleteById(id) {
    const person = await this.model.findByPk(id);
    if (person.active) {
      person.active = false;
      return await person.save();
    }
    return person;
  }
}

module.exports = PeopleService;
