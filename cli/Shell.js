// Imports:
const LEXER_IMPORT = require('../lexer/Lexer.js');


function InputStep() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});

	readline.question('Pluh > ', command => {
		readline.close();
		if(command == 'exit()') {
			return;
		} else {
			let output = LEXER_IMPORT.Run('<stdin>', command);

			const result = output.tokens;
			const error = output.error;

			if(error) {
				console.log(error.As_String());
			} else {
				console.log(result);
			}

			InputStep();
		}
	});
}

InputStep();