const router = require('express').Router();
const classeRouter = require('./classes_router');
const levelsRouter = require('./levels_router');
const peopleRouter = require('./people_router');
const registrationsRouter = require('./registrations_router');

router.use('/classes', classeRouter);
router.use('/levels', levelsRouter);
router.use('/people', peopleRouter);
router.use('/registrations', registrationsRouter);

router.use((error, req, res, next) => {
	console.log(error);
	error.httpCode ? res.status(error.httpCode) : res.status(500);
	res.json({
		error: {
			message: error.message,
			httpCode: error.httpCode,
			httpMessage: error.httpMessage,
			date: new Date().toISOString(),
		},
	});
});

module.exports = router;
