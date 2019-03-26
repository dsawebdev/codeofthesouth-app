import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions:{
    contactSubmit(newContact){
      newContact.save()
        .then(res => {
          this.set('responseMessage', `Thank You! for messaging us, we will get back to you at ${res.get('email')}`, setTimeout(() => {
            this.set('responseMessage', '');
          }, 5000));
        })
    },

    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
