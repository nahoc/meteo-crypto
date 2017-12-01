// Collections
Coins = new Mongo.Collection('coins');

Coins.allow({
  insert: () => true
  , update: () => true
  , remove: () => true
});
// deny rules
Coins.deny({
  insert: () => false
  , update: () => false
  , remove: () => false
});

// Schema
/*Schemas = {};

Schemas.Coins = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  amount: {
    type: Number,
    label: "Amount",
  },
  holdingQty: {
    type: Number,
    label: "Holding qty",
  },
  holdingValue: {
    type: Number,
    label: "Holding value",
  }
});

Coins.attachSchema(Schemas.Coins);*/