// require here is nothing but the function to which we pass the arguments 
// the arguments are the greet which is the file name in the current directory
var greet = require("./greet");
console.log(greet());


//pass by reference(This applies to the things when the primitive datatypes like string and the number and integer)
var pass_by_reference = function(a){
  a = 123
  return a 
}

var b = 234
console.log(pass_by_reference(b));//123
console.log(b)//234
// 234 will not be equal to the 123