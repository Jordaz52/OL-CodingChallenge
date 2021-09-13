exports.calculation = (firstNumber,operator,secondNumber) => {
	  let resultNumerator, resultDenominator, resultWholeNumber = 0, flagWhole = 0;
	  
	  switch(operator){
        case "+":
				case "-":
					({resultNumerator, resultDenominator} = addOrSubstract(firstNumber,operator,secondNumber));
					break;
        case "/":
				case "*":
					({resultNumerator, resultDenominator} = multiplyOrDivide(firstNumber,operator,secondNumber));
	            break;
    }

	({resultNumerator, resultDenominator, resultWholeNumber, flagWhole} = simplify(resultNumerator,resultDenominator));

	//throwing error if calculations cant be made with the input.
	if(isNaN(resultWholeNumber) || isNaN(resultNumerator) || isNaN(resultDenominator)) throw "Unable to do the operation given. Please verify.";
	
	//print result and return it for the test cases
	let result;
	if(flagWhole == 1){
		result = resultWholeNumber + "_" + resultNumerator + "/" + resultDenominator;
		console.log("= " + result);
	}else if(flagWhole == 2){
		result = resultWholeNumber;
		console.log("= " + result);
	}else{
		result = resultNumerator + "/" + resultDenominator;
		console.log("= " + result);
	}
	return result;
  }
  
  //this function, as the name says, is used to simplify the fraction for a better result
  const simplify = (numerator,denominator) => {
	let resultNumerator = 0, resultDenominator = 0, resultWholeNumber = 0, flagWhole = 0;
	//function to get the common denominator in order to simplify at its best the fraction
    let commonDenom = function commonDenom(a,b){
      return b ? commonDenom(b, a%b) : a;
    };
    commonDenom = commonDenom(numerator,denominator);
    let num = numerator/commonDenom;
	
    let denom = denominator/commonDenom;
	let denomPositive;
	
	if(denom<0){
		denomPositive = (denom * -1);
	}else{
		denomPositive = denom;
	}

	/*Checking if the fraction ends up being an improper fraction and will trasnform it as a mixed number in the output.
		flagWhole's value will handle this in the calculation function
	*/
    if((num>denomPositive)){
		flagWhole = 1;
        resultWholeNumber = parseInt(num/denom);
        let decimal = (num/denom) - resultWholeNumber;
		if(decimal != 0){
			resultNumerator = num - (denom * resultWholeNumber);
			if(resultNumerator<0){
				resultNumerator = resultNumerator * -1;
			}
			resultDenominator = denom;
			if(resultDenominator<0){
				resultDenominator = resultDenominator * -1;
			}
		}else{
			flagWhole = 2;
		}
    }else{
				resultNumerator = num;
        resultDenominator = denom;
	}
	
	return {
			resultNumerator,
			resultDenominator,
			resultWholeNumber,
			flagWhole
		};
  }
  
  //This function handles adding and substracting operations
  const addOrSubstract = (firstNumber, operator, secondNumber) => {
		let resultNumerator, resultDenominator = 0;

		firstNumber.numerator = firstNumber.numerator * secondNumber.denominator;
		firstNumber.denominator = firstNumber.denominator * secondNumber.denominator;
		secondNumber.numerator = secondNumber.numerator * (firstNumber.denominator/secondNumber.denominator);
		secondNumber.denominator = secondNumber.denominator * (firstNumber.denominator/secondNumber.denominator);
		
		resultDenominator = secondNumber.denominator;				

		if(operator == '+'){
			resultNumerator = firstNumber.numerator + secondNumber.numerator;
		}else{
			resultNumerator = firstNumber.numerator - secondNumber.numerator;
		}
		
		return {
			resultNumerator,
			resultDenominator
		};
  }
  
  //This function handles multiplying and dividing operations
  const multiplyOrDivide = (firstNumber, operator, secondNumber) => {
	  if (operator == '/') {
		  resultNumerator = firstNumber.numerator * secondNumber.denominator;
		  resultDenominator = firstNumber.denominator * secondNumber.numerator;
	  }else {
		  resultNumerator = firstNumber.numerator * secondNumber.numerator;
		  resultDenominator = firstNumber.denominator * secondNumber.denominator;
	  }
	  return {
			resultNumerator,
			resultDenominator
		};
  }
  