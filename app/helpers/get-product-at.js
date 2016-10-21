import Ember from 'ember';

export function getProductAt([index, products, prop]/*, hash*/) {
  return products.objectAt(index)[prop];
}

export default Ember.Helper.helper(getProductAt);
