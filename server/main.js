import { Meteor } from 'meteor/meteor';
import seedDatabase from './methods/seedDatabase';

Meteor.publish('coins', function coinsPublication() {
  return Coins.find();
});

Meteor.publish('allCoins', function allCoinsPublication() {
  return AllCoins.find();
});

Meteor.startup(() => {
    seedDatabase();
});