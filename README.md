Learning about the core concepts in the Javascript

The core concepts in the javascript include the modules and the classes


in javascript-core-parts/app.js we have 
```
  //require("./greet");
  //this is nothing but here require is nothing but the function in which we can pass the stringand //then it takes that arguments it would basically be a file which is nothing but the module 
  //so the variables in the greet are not available in the app.js file here and it throws back the ////error as shown .

  This is the greet
  /home/prathap/Documents/node-learnings/javascript-core-parts/app.js:4
  greet;
  ^
  ReferenceError: greet is not defined
```


In Javascript what is an object?

```
  In javascript sense an object is nothing but the collection of the key value pairs 
  Example:
  
  {
    fname: "prathap",
    lname: "mohan",
    address: "skfkfskf",
    locations: [
      {
        name: "loc1",
        address: "inde1"  
      },
      {
        name: "loc2",
        address: "inde2"  
      }  
    ]  
  }
```


What is primitive?

  That is not the object like in the javascript if it is an object show have the key,value pairs and should follow the prototypal inheritances but now the 

  primitive means just a value example would be

  var a = "total"
  //here the total which is a string is being assigned to the variable a



What is pass by value and pass by reference?
   The pass by value whenever the object is being passed as a parameter to the function the copy of the primitive data type gets generated only for the primitive datatypes like the 
   Ex: strings, numbers

   And for the non-primitive datatypes pass-by-reference will tend to happen and then can be made to happen now .

```
   function Lagon(a){
     a = 3
     console.log(a);
   }

   b = 2
   Lagon(b)// when passing to the function a copy of the primitive datatype(since it is a number) will be taken and will be passed to the function Lagon(b)
   console.log(b);
```

```
  require('path')
  //require is a function for which the path is being passed

  module.exports is what the require function return value would be 

  this works because it is the function in which your code is wrapped and that function is passed with these arguments as in the require the path
```


What is JSON? And what is it inspired by?

JSON stands for the JavaScriptObjectNotation(JSON) and this is being inspired by the Javascript object literals which are nothing but the key value pairs. And these json objects can be used to pass the data from one object to the other and they can be used to pass the data from one server to the other 

Here node also tries to understand the JSON object notation and then it can parse the things also .

```
 JSON(JavaScriptObjectNotation)
 example
 {
   "firstname": "mohan",
   "lastname": "prathap"
 }
```


More on require
```
  require("./mangoes")
  If there is no file by name mangoes.js then what node does is it check for a folder by name mangoes and the loads the file index.js in the mangoes folder 
  > dir structure it looks is mangoes/index.js
```


> Module Patterns

##### Pattern1
* Replacing the module.exports not with any object but with the function directly .
```
#greet1.js
module.exports = function(){
  return "allah"
}

#in app.js
var greet1 = require('./greet1');
console.log(greet1());//allah
```

