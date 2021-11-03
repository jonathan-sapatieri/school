require('dotenv').config({ path: './config/.env' });

module.exports = {
	type: process.env.NODE_ENV,
	api: {
		port: process.env.API_PORT,
	},
	db: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		name: process.env.DB_NAME,
		user: process.env.DB_USER,
		pass: process.env.DB_PASS,
		dialect: process.env.DB_DIALECT,
	},
};
