const env = require('./config/env');
const app = require('./api/app');

app.listen(env.api.port, () =>
	console.log(`${env.type} server running on port ${env.api.port}`)
);
