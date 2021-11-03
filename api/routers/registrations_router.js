const registrationsRouter = require('express').Router();
const { RegistrationsController } = require('../controllers');

// Authorization

// Load
registrationsRouter.use(
	'/:id',
	RegistrationsController.loadById.bind(RegistrationsController)
);

// Operations
registrationsRouter.post(
	'/',
	RegistrationsController.create.bind(RegistrationsController)
);
registrationsRouter.get(
	'/',
	RegistrationsController.readAll.bind(RegistrationsController)
);
registrationsRouter.get(
	'/:id',
	RegistrationsController.readById.bind(RegistrationsController)
);
registrationsRouter.put(
	'/:id',
	RegistrationsController.updateById.bind(RegistrationsController)
);
registrationsRouter.delete(
	'/:id',
	RegistrationsController.deleteById.bind(RegistrationsController)
);

module.exports = registrationsRouter;
