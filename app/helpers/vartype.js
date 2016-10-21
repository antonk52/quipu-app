import Ember from 'ember';

export function vartype(val) {
  let a = typeof val;
  return a + ' is ' + val ;
}

export default Ember.Helper.helper(vartype);
