const env = require('../../config/env');
const config = require('../../config/sequelize')[env.type];

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(config);

const db = {
	Classes: require('./classes')(sequelize, Sequelize.DataTypes),
	Levels: require('./levels')(sequelize, Sequelize.DataTypes),
	People: require('./people')(sequelize, Sequelize.DataTypes),
	Registrations: require('./registrations')(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) db[modelName].associate(db);
});

module.exports = db;
