import Ember from 'ember';

export function getProductAt([index, products, prop]/*, hash*/) {
  debugger;
  return products.objectAt(index)[prop];
}

export default Ember.Helper.helper(getProductAt);
