import Controller from '@ember/controller';
import { match, and, gte, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {
    contactSubmit(){



      this.set('responseMessage', `Thank You! We've just saved your email address: ${this.get('emailAddress')}`, setTimeout(() => {
        this.set('responseMessage', '');
      }, 5000));
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
