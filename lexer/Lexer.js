const Tokens_Import = require('../lexer/Tokens_Import.js');
const Error_Import = require('../lexer/Error.js');

const TT_INT 	  =  'TT_INT';
const TT_FLOAT  = 'TT_FLOAT';
const TT_PLUS   = 'TT_PLUS';
const TT_MINUS  = 'TT_MINUS';
const TT_MUL 	  =  'TT_MUL';
const TT_DIV 	  =  'TT_DIV';
const TT_LPAREN = 'TT_LPAREN';
const TT_RPAREN = 'TT_RPAREN;'

const DIGITS_REGEX = /[0-9]/;
const DIGITS_REGEX_DOT = /[0-9.]/;
const SPACE_TAB_REGEX = /[ \t]/;

class Lexer {
	constructor(text) {
		this.text = text;
		this.pos = -1;
		this.current_character = null;

		this.Advance();
	}

	Advance() {
		this.pos++;
		// console.log(`Pos: ${this.pos}`);
		// console.log(`Text at pos: ${this.text[this.pos]}`);
		if(this.pos <= this.text.length) {
			this.current_character = this.text[this.pos];
		} else {
			this.current_character = null;
		}
	}

	Make_Tokens() {
		let tokens = [];
		let error = null;
		let space_or_other = false;


		while(this.current_character != null) {
			// console.log(`Character: ${this.current_character}`);
			if (SPACE_TAB_REGEX.test(this.current_character)) {
				// console.log('Space or other');
				space_or_other = true;
				this.Advance();
			} else if (DIGITS_REGEX.test(this.current_character)) {
				// console.log('Number');
				tokens.push(this.Make_Number());
			} else if(this.current_character == '+') {
				// console.log('Plus');
				tokens.push(new Tokens_Import.Token(TT_PLUS))
			} else if(this.current_character == '-') {
				// console.log('Minus');
				tokens.push(new Tokens_Import.Token(TT_MINUS))
			} else if(this.current_character == '*') {
				// console.log('Times');
				tokens.push(new Tokens_Import.Token(TT_MUL))
			} else if(this.current_character == '/') {
				// console.log('Div');
				tokens.push(new Tokens_Import.Token(TT_DIV))
			} else if(this.current_character == '(') {
				// console.log('LeftPara');
				tokens.push(new Tokens_Import.Token(TT_LPAREN))
			} else if(this.current_character == ')') {
				// console.log('RightPara');
				tokens.push(new Tokens_Import.Token(TT_RPAREN))
			} else {
				// console.log('illegal');
				return {tokens: [], error: new Error_Import.IllegalCharError(`'${this.current_character}'`)};
			}
			// // console.log(this.text[this.pos]);
			if(space_or_other == false){
				this.Advance();
			}
			space_or_other = false;
		}

		// // console.log(`Tokens: ${JSON.stringify(tokens)}`);
		return {tokens: tokens, error: error};
	}

	Make_Number() {
		let number_str = '';
		let dot_count = 0;

		while(this.current_character != null && DIGITS_REGEX_DOT.test(this.current_character)) {
			if(this.current_character == '.') {
				if(dot_count == 1) {
					break;
				}
				dot_count++;

				// // console.log('Dot');
				number_str += '.';
			} else {
				// // console.log(number_str);
				number_str += this.current_character;
			}
			// // console.log(`Advancing Make_Number\nCurrent Number_str: ${number_str}\nCurrent character: ${this.current_character}`);
			this.Advance();
		}

		if(dot_count == 0) {
			return new Tokens_Import.Token(TT_INT, parseInt(number_str));
		} else {
			return new Tokens_Import.Token(TT_FLOAT, parseFloat(number_str));
		}
	}
}

function Run(command) {
	const lexer = new Lexer(command);

	return lexer.Make_Tokens();;
}

module.exports = { Run };