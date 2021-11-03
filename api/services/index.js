const ClassesService = require('./classes_service');
const LevelsService = require('./levels_service');
const PeopleService = require('./people_service');
const RegistrationsService = require('./registrations_service');

module.exports = {
	ClassesService: new ClassesService(),
	LevelsService: new LevelsService(),
	PeopleService: new PeopleService(),
	RegistrationsService: new RegistrationsService(),
};
