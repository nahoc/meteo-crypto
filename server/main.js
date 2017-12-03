import { Meteor } from 'meteor/meteor';
import seedDatabase from './methods/seed-database';

Meteor.publish('coins', function coinsPublication() {
  return Coins.find();
});

Meteor.startup(() => {
    seedDatabase();
});