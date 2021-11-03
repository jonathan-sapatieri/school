const HttpError404 = require('./http_error_404');

class IdentifierNotFoundError extends HttpError404 {
	constructor(value, entity) {
		super(`Identifyer '${value}' of '${entity}' not found.`);
	}
}

module.exports = IdentifierNotFoundError;
