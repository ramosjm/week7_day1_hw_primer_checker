const PubSub = require('../helpers/pub_sub.js')
const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('ForView:number-submitted',(event)=>{
    const number = event.detail;
  });
};

module.exports = ResultView;
