module.exports = class Fraction {
  constructor(number) {
	this.numerator = 0;
	this.denominator = 0;
	
	this.stringToFraction(number);
  }

  stringToFraction(stringNumber){
		let underScorePos = stringNumber.search("_");
		let diagPos = stringNumber.search("/");
		let denom = stringNumber.substring(diagPos+1,stringNumber.length);
		let numerator = 0;
		
		if (underScorePos >= 0) {
			let wholeNum = stringNumber.substring(0,underScorePos);
			numerator = stringNumber.substring(underScorePos+1,diagPos);

			this.numerator = (parseInt(wholeNum) * parseInt(denom)) + parseInt(numerator);
			this.denominator = parseInt(denom);
		} else if (diagPos >= 0) {
			numerator = stringNumber.substring(0,diagPos);

			this.numerator = parseInt(numerator);
			this.denominator = parseInt(denom);
	  } else {
		let intNum = parseInt(stringNumber);
		this.numerator = (intNum * intNum);
		this.denominator = intNum;
	  }
  }
  
}