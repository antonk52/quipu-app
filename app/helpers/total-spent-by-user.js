import Ember from 'ember';

export function totalSpentByUser(products/*, hash*/) {
  let spent = 0;
  for (let i = 0, l = products[1].length; i < l; i++){
    spent += parseFloat(products[0].objectAt(products[1][i]).price, 10)
  }
  // js floating point
  return spent.toFixed(2);;
}

export default Ember.Helper.helper(totalSpentByUser);
