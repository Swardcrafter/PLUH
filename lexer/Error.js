class Error {
	constructor(error_name, details) {
		this.error_name = error_name;
		this.details = details;
	}

	As_String() {
		return `${this.error_name}: ${this.details}`;
	}
}

class IllegalCharError extends Error {
	constructor(details) {
		super('Illegal Character', details);
	}
}

module.exports = { IllegalCharError };