import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  responseMessage: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation(){
      const email = this.get('emailAddress');

      const newInvitaiton = this.store.createRecord('invitation', {email: email});

      newInvitaiton.save()
        .then(res => {
          this.set('responseMessage', `Thank You! We've just saved your email address with the following id: ${res.get('id')}`, setTimeout(() => {
            this.set('responseMessage', '');
          }, 5000));
          this.set('emailAddress', '');
        })
    }
  }
});
