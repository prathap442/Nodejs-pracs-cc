// require here is nothing but the function to which we pass the arguments 
// the arguments are the greet which is the file name in the current directory
var greet = require("./greet");
console.log(greet());


//pass by value(This applies to the things when the primitive datatypes like string and the number and integer)
var pass_by_value = function(a){
  a = 123
  return a 
}

var b = 234
console.log(pass_by_value(b));//123
console.log(b)//234
// 234 will not be equal to the 123


//pass by reference
//here when the object is being passed as the argument the objects reference of the memory location would be take
//this pass_by_reference is applicable for the pass_by_reference function
var pass_by_reference = function(b){
  b.genda = function(){
    return "agenda";
  }
  return b
}

var obj1 = {
  fname: "Mohan",
  lname: "prathap",
  fullName: function(){
    return (this.fname + this.lname + "totalname")
  }   
};
console.log(pass_by_reference(obj1).genda());//agenda 
console.log(obj1)
/*
{ 
  fname: 'Mohan',
  lname: 'prathap',
  fullName: [Function: fullName],
  genda: [Function] 
}
*/

//This object when passed by reference the state gets modified.