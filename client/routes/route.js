/**
 * Created by Shashank on 2/26/2017.
 */

Router.configure({
  layoutTemplate:'layout'
})

Router.map(function(){
  this.route('Home',{path:'/'});
  this.route('About');
  this.route('Service');
})
