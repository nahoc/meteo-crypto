import { Meteor } from 'meteor/meteor';

Meteor.publish('coins', function coinsPublication() {
  return Coins.find();
});