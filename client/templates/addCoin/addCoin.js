Meteor.subscribe('allCoins');

Template.addCoin.helpers({
    settings: function () {
        console.log(AllCoins);
        return {
            position: "top",
            limit: 5,
            rules: [
                {
                    collection: AllCoins,
                    field: "FullName",
                    template: Template.coinSearchResult,
                }
            ]
        };
    }
});

Template.addCoin.events({
    "autocompleteselect input": function (event, template, doc) {
        console.log("selected ", doc);//
    }
});
