const levelsRouter = require('express').Router();
const { LevelsController } = require('../controllers');

// Authorization

// Load
levelsRouter.use('/:id', LevelsController.loadById.bind(LevelsController));

// Operations
levelsRouter.post('/', LevelsController.create.bind(LevelsController));
levelsRouter.get('/', LevelsController.readAll.bind(LevelsController));
levelsRouter.get('/:id', LevelsController.readById.bind(LevelsController));
levelsRouter.put('/:id', LevelsController.updateById.bind(LevelsController));
levelsRouter.delete('/:id', LevelsController.deleteById.bind(LevelsController));

module.exports = levelsRouter;
