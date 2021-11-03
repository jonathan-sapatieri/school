const peopleRouter = require('express').Router();
const { PeopleController } = require('../controllers');

// Authorization

// Load
peopleRouter.use('/:id', PeopleController.loadById.bind(PeopleController));

// Operations
peopleRouter.post('/', PeopleController.create.bind(PeopleController));
peopleRouter.get('/', PeopleController.readAll.bind(PeopleController));
peopleRouter.get('/:id', PeopleController.readById.bind(PeopleController));
peopleRouter.put('/:id', PeopleController.updateById.bind(PeopleController));
peopleRouter.delete('/:id', PeopleController.deleteById.bind(PeopleController));

module.exports = peopleRouter;
