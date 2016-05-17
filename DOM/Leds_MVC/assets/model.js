var model = (function () {
  var inc_conversion = .0625,
    hal_conversion = .0450,
    cfl_conversion = .0146,
    led_conversion = .0125;

  var data = {
      current_lumens: 1600,
      current_hour_cost: 12,
      current_usage: 1,
      inc_cost: null,
      hal_cost: null,
      cfl_cost: null,
      led_cost: null,
      inc_wattage: null,
      hal_wattage: null,
      cfl_wattage: null,
      led_wattage: null,
      brighttness: [375, 600, 900, 1125, 1600]
  };

  function _calculateWattage () {
    data.inc_wattage = Math.round( data.current_lumens * inc_conversion);
    data.hal_wattage = Math.round( data.current_lumens * hal_conversion);
    data.cfl_wattage = Math.round( data.current_lumens * cfl_conversion);
    data.led_wattage = Math.round( data.current_lumens * led_conversion);
  }

  function _calculateCost () {
    data.inc_cost = (((data.inc_wattage * 365 * data.current_usage) /1000) * data.current_hour_cost / 100).toFixed(2);
    data.hal_cost = (((data.hal_wattage * 365 * data.current_usage) /1000) * data.current_hour_cost / 100).toFixed(2);
    data.cfl_cost = (((data.cfl_wattage * 365 * data.current_usage) /1000) * data.current_hour_cost / 100).toFixed(2);
    data.led_cost = (((data.led_wattage * 365 * data.current_usage) /1000) * data.current_hour_cost / 100).toFixed(2);
  }
  var _onChange = function () {  };

  function _init (fn) {
    _onChange = fn;
    console.log("_init - _onChange: " + _onChange);
    _calculateWattage();
    _calculateCost();
    _onChange(data);// *  function onChange(data) {view.render( data );} (из контроллер)
    console.log("_init - data: " + _onChange(data));
  }

  function _set (type, value) {
    switch (type) {
      case 'brighttness':
        data.current_lumens = value;
        _calculateWattage();
        break;
      case 'cost':
        data.current_hour_cost = value;
        break;
      case 'usage':
        data.current_usage = value;
        break;
    }
    _calculateCost();
    _onChange(data);
  }

  return {
    set: _set,
    init: _init
  }
})();
