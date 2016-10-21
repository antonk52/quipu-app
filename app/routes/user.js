import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      menu: $.get('/api/menu'),
      user: $.get('/api/user'),
      products: $.get('/api/products')
    });
  }

});
