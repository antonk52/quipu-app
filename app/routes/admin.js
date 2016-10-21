import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      menu: $.get('/api/menu'),
      products: $.get('/api/products'),
      user: $.get('/api/user')
    })
  }
});
