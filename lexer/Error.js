class Error {
	constructor(pos_start, pos_end, error_name, details) {
		this.pos_start = pos_start;
		this.pos_end = pos_end;
		this.error_name = error_name;
		this.details = details;
	}

	As_String() {
		let result = `${this.error_name}: ${this.details}\n`;
		result += `File ${this.pos_start.fn}, line ${this.pos_start.ln + 1}`;
		return result;
	}
}

class IllegalCharError extends Error {
	constructor(pos_start, pos_end, details) {
		super(pos_start, pos_end, 'Illegal Character', details);
	}
}

module.exports = { IllegalCharError };