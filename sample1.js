exports = function(){
  console.log("this is the exports function"); 
}
// module.exports.greet = function(){
//   console.log("This is the greeting");
// }

console.log(exports)
console.log(module.exports)
// this would return
/*
```
[Function: exports]
{}
```
exports is the same as the module.exports at the intial state both will be pointing to the object 

and since there is an assignment being done to the exports it looses its reference for the exports and so the module.exports

doesnot loose its reference for this sake we see the output as the function for the exports and for the

module.exports we see this as an empty object

*/