const sumAll = function(numOne, numTwo) {
  let product = 0;


  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0 || numOne === NaN || numTwo === NaN){
    return "ERROR";
  }
  else if (numOne < numTwo) {
    for (let i = numOne; i <= numTwo; i++) {
      product += i;
    }
    return product;
  }
  else {
    for (let i = numTwo; i <= numOne; i++) {
      product += i;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = sumAll;
