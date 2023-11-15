class Token {
	constructor(type_, value=null) {
		this.type = type_;
		this.value = value;
	}
}

module.exports = { Token };