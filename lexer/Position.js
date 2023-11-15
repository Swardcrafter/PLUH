class Position {
	constructor(idx, ln, col, fn, ftxt) {
		this.idx = idx;
		this.ln = ln;
		this.col = col;
		this.fn = fn;
		this.ftxt = ftxt;
	}

	Advance(current_character) {
		this.idx++;
		this.col++;

		if(current_character == '\n') {
			this.ln++;
			this.col = 0;
		}

		return this;
	}

	Copy() {
		return new Position(this.idx, this.ln, this.col, this.fn, this.ftxt);
	}
}

module.exports = { Position };