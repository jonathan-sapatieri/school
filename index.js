const env = require('./src/config');
const App = require('./src');

const PORT = env.api.port;
const ENV = env.type.toLocaleUpperCase();

App.listen(PORT, () => console.log(`${ENV} server running on port ${PORT}...`));
