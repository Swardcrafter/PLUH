const Node_import = require('./Nodes.js');

const TT_INT 	  =  'TT_INT';
const TT_FLOAT  = 'TT_FLOAT';
const TT_PLUS   = 'TT_PLUS';
const TT_MINUS  = 'TT_MINUS';
const TT_MUL 	  =  'TT_MUL';
const TT_DIV 	  =  'TT_DIV';
const TT_LPAREN = 'TT_LPAREN';
const TT_RPAREN = 'TT_RPAREN;'

class Parser {
	constructor(tokens) {
		this.tokens = tokens;
	}

	Parse() {
		return {
			result: this.tokens,
			error: NaN
		};
	}
}

module.exports = { Parser };