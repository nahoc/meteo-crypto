// Collections
Coins = new Mongo.Collection('coins');

// Allow rules
Coins.allow({
  insert: () => true
  , update: () => true
  , remove: () => true
});

// Deny rules
Coins.deny({
  insert: () => false
  , update: () => false
  , remove: () => false
});

// Schema
const Schemas = {};

Schemas.Coins = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  amount: {
    type: Number,
    label: "Amount",
  },
});

Coins.attachSchema(Schemas.Coins);