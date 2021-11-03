const express = require('express');
const app = express();
const router = require('./routers/router');

app.use(express.json());
app.use('/api', router);

module.exports = app;
