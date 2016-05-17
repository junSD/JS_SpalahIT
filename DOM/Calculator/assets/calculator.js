  (function IIFE (argument) {
  'use string';

  

  var select = document.querySelector('select.lumens');
  var cent = document.querySelector('#cent');
  var hpr = document.querySelector('#hpr');

  console.log(select);
  console.log(cent);
  console.log(hpr);


  function Calculator (select, cent, hpr) {

    var inc_conversion = .0625,
    hal_conversion = .0450,
    cfl_conversion = .0146,
    led_conversion = .0125;

    var inc_result_c = document.querySelector('#inc_result_c');
    hal_result_c = document.querySelector('#hal_result_c'),
    cfl_result_c = document.querySelector('#cfl_result_c'),
    led_result_c = document.querySelector('#led_result_c');

    var inc_result_w = document.querySelector('#inc_result_w');
    hal_result_w = document.querySelector('#hal_result_w'),
    cfl_result_w = document.querySelector('#cfl_result_w'),
    led_result_w = document.querySelector('#led_result_w');

    // определение мощности
    // лампа накаливания
    var inc_wattage = (select * inc_conversion).toFixed(1);
    // лампа галогеновая
    var hal_wattage = (select * hal_conversion).toFixed(1);
    // лампа CFL
    var cfl_wattage = (select * cfl_conversion).toFixed(1);
    // лампа LED
    var led_wattage = (select * led_conversion).toFixed(1);
    // определение стоимости в год (лампа накаливания)
    var inc_cost = (((inc_wattage * 365 * hpr) /1000) * (cent/100)).toFixed(2);
    // определение стоимости в год (лампа галогеновая)
    var hal_cost = (((hal_wattage * 365 * hpr) /1000) * (cent/100)).toFixed(2);
    // определение стоимости в год (лампа CFL)
    var cfl_cost = (((cfl_wattage * 365 * hpr) /1000) * (cent/100)).toFixed(2);
    // определение стоимости в год (лампа LED)
    var led_cost = (((led_wattage * 365 * hpr) /1000) * (cent/100)).toFixed(2);

    console.log("inc_wattage: " + inc_wattage);
    console.log("hal_wattage: " + hal_wattage);
    console.log("cfl_wattage: " + cfl_wattage);
    console.log("led_wattage: " + led_wattage);

    console.log("hpr: " + hpr);
    console.log("cent: " + cent);


    console.log("inc_cost: " + inc_cost);
    console.log("hal_cost: " + hal_cost);
    console.log("cfl_cost: " + cfl_cost);
    console.log("led_cost: " + led_cost);

    //watt
    inc_result_w.innerHTML = inc_wattage;
    hal_result_w.innerHTML = hal_wattage;
    cfl_result_w.innerHTML = cfl_wattage;
    led_result_w.innerHTML = led_wattage; 

    //price
    inc_result_c.innerHTML = inc_cost;
    hal_result_c.innerHTML = hal_cost;
    cfl_result_c.innerHTML = cfl_cost;
    led_result_c.innerHTML = led_cost;
  }
  Calculator (600, 12, 1);

  function onKeyUpHandler (event) {
      Calculator(select.value, cent.value, hpr.value);     
  }
  
  // вешаем событие
  select.addEventListener('change', onKeyUpHandler);

  cent.addEventListener('click', onKeyUpHandler);
  hpr.addEventListener('click', onKeyUpHandler);

  cent.addEventListener('keyup', onKeyUpHandler);
  hpr.addEventListener('keyup', onKeyUpHandler);

})();