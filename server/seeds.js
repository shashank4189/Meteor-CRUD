/**
 * Created by shashank on 20/2/17.
 */
Meteor.startup(function(){

  if(Teams.find().count()==0){
    [
      { title:'Barcode1'},
      { title:'Barcode2'},
      { title:'Barcode3'},
    ].forEach(function(item){
      Teams.insert(item);
    })
  }
})