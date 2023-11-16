const Node_import = require('./Nodes.js');
const FS = require('fs');

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
		this.AST = {};
	}

	Parse() {
		for(let i=0; i < this.tokens.length; i++) {
			this.AST[i] = this.tokens[i];
		}
		
		FS.writeFile('./parser/AST.json', JSON.stringify(this.AST), function (err) {
			if (err) throw err;
		});

		return {
			result: this.AST,
			error: NaN
		};
	}
}

module.exports = { Parser };