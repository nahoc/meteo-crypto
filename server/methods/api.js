import { HTTP } from 'meteor/http';

Meteor.methods({
  'getCoinsList': function(url){
    return HTTP.get(url);
  },
  'updateBalance': function(url){
    return Coins.aggregate({
      $group: {
          _id: '',
          holdingValue: { $sum: '$holdingValue' }
      }
    }, {
      $project: {
          _id: 0,
          holdingValue: '$holdingValue'
      }
    });
  },
});