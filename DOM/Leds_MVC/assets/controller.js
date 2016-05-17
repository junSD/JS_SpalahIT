$(document).ready(function () {

  var $myCalculator = $('#myCalculator');

  $myCalculator.on('change', 'select', onChangeWattage);
  $myCalculator.on('change', 'input:first', onChangeCost);
  $myCalculator.on('change', 'input:last', onChangeUsage);

  view.init($myCalculator);
  model.init(onChange);
  
  function onChange(data) {
    view.render( data );
  }

  function onChangeWattage (event) {
    model.set('brighttness', Number( $(event.target).val() ) );
  }

  function onChangeCost (event) {
    model.set('cost', Number(event.target.value) );
  }
  function onChangeUsage (event) {
    model.set('usage', Number(event.target.value) );
  }
});
