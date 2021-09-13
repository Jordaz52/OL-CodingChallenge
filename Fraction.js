/*Fraction js contains the Fraction class which manage and stores each of the numbers from the operation, it clasifies them as mixed numbers, fraction
	or normal whole number and keeps the numerator and denominator stored in the object
*/
module.exports = class Fraction {
  constructor(number) {
    this.numerator = 0;
    this.denominator = 0;

    this.stringToFraction(number);
  }

  stringToFraction(stringNumber) {
    let underScorePos = stringNumber.search("_");
    let diagPos = stringNumber.search("/");
    let denom = stringNumber.substring(diagPos + 1, stringNumber.length);
    let numerator = 0;

    if (underScorePos >= 0) {
      //When the number is a mixed number, the class transform it as a fraction for easier managing the operation
      let wholeNum = stringNumber.substring(0, underScorePos);
      numerator = stringNumber.substring(underScorePos + 1, diagPos);

      this.numerator =
        parseInt(wholeNum) * parseInt(denom) + parseInt(numerator);
      this.denominator = parseInt(denom);
    } else if (diagPos >= 0) {
      numerator = stringNumber.substring(0, diagPos);

      this.numerator = parseInt(numerator);
      this.denominator = parseInt(denom);
    } else {
      //Keeping whole numbers input as fraction for easier managing the operation
      let intNum = parseInt(stringNumber);
      this.numerator = intNum * intNum;
      this.denominator = intNum;
    }
  }
};
