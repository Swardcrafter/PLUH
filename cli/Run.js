const LEXER_IMPORT = require('../lexer/Lexer.js');
const PARSER_IMPORT = require('../parser/Parser.js');

function Run(fn, command) {
	const lexer = new LEXER_IMPORT.Lexer(fn, command);

	const output = lexer.Make_Tokens();

	if(output.error) {
		return NaN, output.error
	}

	const parser = new PARSER_IMPORT.Parser(output.tokens);
	const AST = parser.Parse();

	return AST;
}

module.exports = { Run };