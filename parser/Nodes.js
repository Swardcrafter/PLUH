class NumberNode {
	constructor(tok) {
		this.tok = tok;
	}
}

class BinOpNode {
	constructor(left_node, op_tok, right_node) {
		this.left_node = left_node;
		this.op_tok = op_tok;
		this.right_node = right_node;
	}
}

module.exports = { NumberNode, BinOpNode };