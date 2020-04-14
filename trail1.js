var jsonObject = require('./mangoes');
console.log(jsonObject.english);
console.log(jsonObject.spanish);

//output of the above two lines would be
//[Function: english]
//[Function: spanish]
//What is the importance of the index.js file in the mangoes folder

var greetings = require("./greetings.json");//loading the json object directly without any exports or imports
greetings.firstname;
console.log(greetings.firstname);//mohan