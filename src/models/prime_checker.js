const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function(){
  PubSub.subscribe('ForView:number-submitted',(event)=>{
    const inputtedNumber = event.detail;
    result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeNumber:result',result);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return number + ' is not a prime number';
    }
  }
  return number + ' is a prime number';
};

module.exports = PrimeChecker;
