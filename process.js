/*process js which handles the start of the process creating the necesary objects and calling the calculation function which
  does all the operation
*/
const Fraction = require("./Fraction.js");
const { calculation } = require("./calculation");
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
    let operator = operation[searchOp];
    let result;

    const firstNumber = new Fraction(firstStringNum);
    const secondNumber = new Fraction(secondStringNum);

    if (operator == "/" && secondNumber.numerator == "0") {
      throw "Can't divide y zero.";
    }

    if (
      operator == "-" &&
      firstNumber.numerator == 0 &&
      secondNumber.numerator != 0
    ) {
      result = "-" + secondStringNum.replace(/ /g, "");
      console.log("= " + result);
      return result;
    }

    if (firstNumber.numerator == 0 || secondNumber.numerator == 0) {
      switch (operator) {
        case "+":
        case "-":
          result =
            firstNumber.numerator == 0 ? secondStringNum : firstStringNum;
          break;
        default:
          result = 0;
          break;
      }

      console.log("= " + result);
      return result;
    }

    result = calculation(firstNumber, operator, secondNumber);

    return result;
  },
};
