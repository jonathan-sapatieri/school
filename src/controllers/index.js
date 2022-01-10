const ClassesController = require('./classes_controller');
const LevelsController = require('./levels_controller');
const PeopleController = require('./people_controller');
const RegistrationsController = require('./registrations_controller');

module.exports = {
	ClassesController: new ClassesController(),
	LevelsController: new LevelsController(),
	PeopleController: new PeopleController(),
	RegistrationsController: new RegistrationsController(),
};
