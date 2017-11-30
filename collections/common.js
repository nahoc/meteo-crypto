// Collections
const Coins = new Mongo.Collection('coins');

// Schema
const Schemas = {};

Schemas.Coins = new SimpleSchema({
  name: {
      type: String,
      label: "Name",
  },
});

Coins.attachSchema(Schemas.Coins);