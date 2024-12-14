const reverseString = function(string) {
  let reversedString = "";
  for (i = 0; i = string.length; i++){
    reversedString += string[string.length - 1];
    console.log(reversedString);
    string = string.substring(0, string.length - 1);
    console.log(string);
  }
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
