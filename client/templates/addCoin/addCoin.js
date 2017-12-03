Template.addCoin.onCreated(function () {
    this.areCoinsLoaded = new ReactiveVar(false);
    let template = this;

    Meteor.call("getCoinsList", 'https://www.cryptocompare.com/api/data/coinlist/', function (e, response) {
        if (e) {
            console.log('Error: ' + e);
        } else {
            allCoins = JSON.stringify(response.data);
            template.areCoinsLoaded.set(true);
        }
    });
});

Template.addCoin.helpers({
    showAutocomplete: function() {
        return Template.instance().areCoinsLoaded.get();
    },
    settings: function () {
        return {
            position: "top",
            rules: [{
                collection: allCoins,
                field: "name"
            }]
        };
    }
});

Template.addCoin.events({
    "autocompleteselect input": function (event, template, doc) {
        //console.log("selected ", doc);
    }
});
