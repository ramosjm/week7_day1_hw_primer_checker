const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
