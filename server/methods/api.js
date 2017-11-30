import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'getCoinsList': function(url){
    return HTTP.get(url);
  }
});