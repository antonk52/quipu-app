import Ember from 'ember';

export function outputProductByIndex( array , index) {
  console.log(array, typeof array);
  console.log(index, typeof index);
  return array.index;
}

export default Ember.Helper.helper(outputProductByIndex);
