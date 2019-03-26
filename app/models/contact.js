import DS from 'ember-data';
import { match, and, gte, not } from '@ember/object/computed';

export default DS.Model.extend({

  email: DS.attr('string'),
  message: DS.attr('string'),

  isValid: match('email', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),

  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue')

});
