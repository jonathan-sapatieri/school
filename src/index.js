const express = require('express');
const App = express();
const Router = require('./routers/router');

App.use(express.json());
App.use('/api', Router);

module.exports = App;
