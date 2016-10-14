import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    console.log('this is the index model log');
  }
});
