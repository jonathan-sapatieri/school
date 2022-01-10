const PeopleRouter = require('express').Router();
const { PeopleController } = require('../controllers');

// Authorization

// Load
PeopleRouter.use('/:id', PeopleController.loadById.bind(PeopleController));

// Operations
PeopleRouter.post('/', PeopleController.create.bind(PeopleController));
PeopleRouter.get('/', PeopleController.readAll.bind(PeopleController));
PeopleRouter.get('/:id', PeopleController.readById.bind(PeopleController));
PeopleRouter.put('/:id', PeopleController.updateById.bind(PeopleController));
PeopleRouter.delete('/:id', PeopleController.deleteById.bind(PeopleController));

module.exports = PeopleRouter;
