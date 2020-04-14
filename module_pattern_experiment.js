var greet1 = require("./greet1");//greet function is made available to the greet1 variable
console.log(greet1());//greet1

var greet2 = require("./greet2").greet;//greet function made function from property that is added to the module.exports in greet2.js
console.log(greet2());//greet2


var greet3 = require("./greet3");//since this is a require and the module that is being exported at the source level is on object it is pass by reference
greet3.greeting = "Changed the greeting object"
console.log(greet3.greet());
/*
Changed the greeting object
*/
var greet3b = require("./greet3")//pass by reference would be reutilised here and then would be reused .
console.log(greet3b.greet());
/*
Changed the greeting object
*/

/*
========================Requiring greet3.js multiple time =========================
This would bring the cached content so output if you try to check here 
greet3.greeting is changed with the message 
from: "Not yet changed" to: "Changed the greeting object"

greet1
greet2
Changed the greeting object
Changed the greeting object
*/


var greet4 = require("./greet4");
console.log(new greet4());//this is for the sake of the generating of the new instance of the greet4 object

var greet5 = require("./greet5");
console.log(greet5.greet());