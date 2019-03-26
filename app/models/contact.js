import DS from 'ember-data';
import { match, and, gte, not } from '@ember/object/computed';

export default DS.Model.extend({

  isValid: match('model.email', /^.+@.+\..+$/),
  isLongEnough: gte('model.message.length', 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  email: DS.attr('string'),
  message: DS.attr('string')
});
