const classesRouter = require('express').Router();
const { ClassesController } = require('../controllers');

// Authorization

// Load
classesRouter.use('/:id', ClassesController.loadById.bind(ClassesController));

// Operations
classesRouter.post('/', ClassesController.create.bind(ClassesController));
classesRouter.get('/', ClassesController.readAll.bind(ClassesController));
classesRouter.get('/:id', ClassesController.readById.bind(ClassesController));
classesRouter.put('/:id', ClassesController.updateById.bind(ClassesController));
classesRouter.delete(
	'/:id',
	ClassesController.deleteById.bind(ClassesController)
);

module.exports = classesRouter;
