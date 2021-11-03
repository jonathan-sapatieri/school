const env = require('../config/env');

module.exports = {
	development: {
		host: env.db.host,
		port: env.db.port,
		database: env.db.name,
		username: env.db.user,
		password: env.db.pass,
		dialect: env.db.dialect,
	},
	test: {
		host: env.db.host,
		port: env.db.port,
		database: env.db.name,
		username: env.db.user,
		password: env.db.pass,
		dialect: env.db.dialect,
	},
	production: {
		host: env.db.host,
		port: env.db.port,
		database: env.db.name,
		username: env.db.user,
		password: env.db.pass,
		dialect: env.db.dialect,
	},
};
