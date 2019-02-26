const PubSub = require('../helpers/pub_sub.js')
const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeNumber:result',(event)=>{
    const number = event.detail;
    result = this.displayResult(number);
    return result;
  });
};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result;
};

module.exports = ResultView;
