/**
 * Created by shashank on 20/2/17.
 */
Meteor.subscribe('teams');
Template.teams.helpers({
  teams:function(){
    return Teams.find();
  },
  isCreatingTeam:function(){
    return Session.get('isCreatingTeam');
  }
})

Template.teams.events({
  'click .create':function(e, tpl){
    debugger;
     Session.set('isCreatingTeam',true);
  },
  'click .cancel':function(e, tpl) {
    Session.set('isCreatingTeam', false);
  },
  'submit form.create-team':function(event, tpl) {
    event.preventDefault();
    Teams.insert({name:tpl.$('#txtTeam').val()},function(error,_id){
      if(error){
        alert(error);
        Session.set('isCreatingTeam', true);
        Tracker.afterFlush(function(){
          tpl.$('input[name=name]').val($('#txtTeam').val());
        });
      }
    });
    Session.set('isCreatingTeam', false);
  },
  'click .remove':function(event, tpl) {
    event.preventDefault();
   Teams.remove(this._id)
  },
})
