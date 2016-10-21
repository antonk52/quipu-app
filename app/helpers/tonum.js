import Ember from 'ember';

export function tonum(val) {
  return Number(val);
}

export default Ember.Helper.helper(tonum);
