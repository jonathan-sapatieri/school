const HttpError = require('./http_error');

class HttpError401 extends HttpError {
	constructor(message) {
		super(message, 401, 'Unauthorized');
	}
}

module.exports = HttpError401;
