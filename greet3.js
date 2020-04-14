function Greet(){
  this.greeting = "Not changed Yet"
  this.greet = function(){
    return (this.greeting);  
  }
}

module.exports = new Greet();