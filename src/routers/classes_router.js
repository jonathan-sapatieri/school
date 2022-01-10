const ClassesRouter = require('express').Router();
const { ClassesController } = require('../controllers');

// Authorization

// Load
ClassesRouter.use('/:id', ClassesController.loadById.bind(ClassesController));

// Operations
ClassesRouter.post('/', ClassesController.create.bind(ClassesController));
ClassesRouter.get('/', ClassesController.readAll.bind(ClassesController));
ClassesRouter.get('/:id', ClassesController.readById.bind(ClassesController));
ClassesRouter.put('/:id', ClassesController.updateById.bind(ClassesController));
ClassesRouter.delete(
	'/:id',
	ClassesController.deleteById.bind(ClassesController)
);

module.exports = ClassesRouter;
