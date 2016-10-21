import Ember from 'ember';

export function outputEmail(mail/*, hash*/) {
  return new Ember.String.htmlSafe(`<a href="mailto:${mail}">${mail}</a>`);
}

export default Ember.Helper.helper(outputEmail);
