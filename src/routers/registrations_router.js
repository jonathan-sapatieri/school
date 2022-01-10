const RegistrationsRouter = require('express').Router();
const { RegistrationsController } = require('../controllers');

// Authorization

// Load
RegistrationsRouter.use(
  '/:id',
  RegistrationsController.loadById.bind(RegistrationsController)
);

// Operations
RegistrationsRouter.post(
  '/',
  RegistrationsController.create.bind(RegistrationsController)
);
RegistrationsRouter.get(
  '/',
  RegistrationsController.readAll.bind(RegistrationsController)
);
RegistrationsRouter.get(
  '/:id',
  RegistrationsController.readById.bind(RegistrationsController)
);
RegistrationsRouter.put(
  '/:id',
  RegistrationsController.updateById.bind(RegistrationsController)
);
RegistrationsRouter.delete(
  '/:id',
  RegistrationsController.deleteById.bind(RegistrationsController)
);

module.exports = RegistrationsRouter;
