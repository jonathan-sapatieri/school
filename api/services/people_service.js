const Service = require('./service');

class PeopleService extends Service {
	constructor() {
		super('People');
	}
}

module.exports = PeopleService;
