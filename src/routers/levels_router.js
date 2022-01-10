const LevelsRouter = require('express').Router();
const { LevelsController } = require('../controllers');

// Authorization

// Load
LevelsRouter.use('/:id', LevelsController.loadById.bind(LevelsController));

// Operations
LevelsRouter.post('/', LevelsController.create.bind(LevelsController));
LevelsRouter.get('/', LevelsController.readAll.bind(LevelsController));
LevelsRouter.get('/:id', LevelsController.readById.bind(LevelsController));
LevelsRouter.put('/:id', LevelsController.updateById.bind(LevelsController));
LevelsRouter.delete('/:id', LevelsController.deleteById.bind(LevelsController));

module.exports = LevelsRouter;
