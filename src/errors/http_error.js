class HttpError extends Error {
	constructor(message, httpCode, httpMessage) {
		super(message);
		this.httpCode = httpCode;
		this.httpMessage = httpMessage;
		this.date = new Date();
	}
}

module.exports = HttpError;
