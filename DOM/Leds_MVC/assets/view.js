var view = (function () {
  var myCalcHtml,
    $myCalculator;

  function _init ($wrapper) {
    $myCalculator = $wrapper;
    myCalcHtml = $('#myCalculatorTemplate').html();
  }

  function _render (data) {
    console.log("data" + data);
    myCalc = _.template(myCalcHtml, data);
    console.log("myCalc" + myCalc);
    $myCalculator.html(myCalc);
  }

  return {
    init: _init,
    render: _render
  };
})();
