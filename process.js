/*process js which handles the start of the process creating the necesary objects and calling the calculation function which
	does all the operation
*/
const Fraction = require("./Fraction.js");
const { calculation } = require("./Operation");
module.exports = {
  process: function (operation) {
    let searchOp;
    //regex to search for the operator
    const regex = /\s[+\-\/*]\s/g;
    //operator's position
    searchOp = operation.search(regex) + 1;

    //extracting each number by substrings
    let firstStringNum = operation.substring(0, searchOp);
    let secondStringNum = operation.substring(searchOp + 2, operation.length);

    const firstNumber = new Fraction(firstStringNum);
    const secondNumber = new Fraction(secondStringNum);

    let operator = operation[searchOp];

    result = calculation(firstNumber, operator, secondNumber);

    return result;
  },
};
