const Fraction = require('./Fraction.js');
const {calculation} = require('./Operation');
module.exports = {
	process: function(operation){

		let searchOp;
		//regex to search for the operator 
		const regex = /\s[+\-\/*]\s/g;
		searchOp = operation.search(regex) + 1;

		let firstStringNum = operation.substring(0,searchOp);
		let secondStringNum = operation.substring(searchOp+2,operation.length);

		const firstNumber = new Fraction(firstStringNum);
		const secondNumber = new Fraction(secondStringNum);

		let operator = operation[searchOp];

		result = calculation(firstNumber,operator,secondNumber);
		
		return result;
	}
}
