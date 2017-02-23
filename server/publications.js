/**
 * Created by shashank on 20/2/17.
 */
Meteor.publish('teams',function(){
  return Teams.find({});
})