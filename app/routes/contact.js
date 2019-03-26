import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions:{
    contactSubmit(newContact){
      newContact.save()
        .then(() => this.controller.set('responseMessage'));
    },

    willTransition(){
      let model = this.controller.get('model');

      if(model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});
