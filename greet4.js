function greet(){
  this.greeting = "this is the no change"
  this.greet = function(){
    return this.greeting;
  }
}

module.exports = greet;