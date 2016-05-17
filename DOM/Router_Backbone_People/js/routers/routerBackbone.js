var Router = Backbone.Router.extend({
  routes: {
    "home": "home",    
    "detail": "detail"    
  },

  initialize: function () {
    Backbone.history.start();// сохранение в кеше
    $('#app').html( $('#search').html() );
  },

  home: function() {
    $('#app').html( $('#search').html() );
    $('div.hide').show();
  },

  detail: function() {
   $('#app').html( $('#detail').html() );
   $('div.hide').hide();
  }


});