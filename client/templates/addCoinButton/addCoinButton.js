Template.addCoinButton.events({
    'click .addCoinButton': function (event, template) {
        $('.addCoinButton').toggleClass("addCoinButtonOpened");
        $('.addCoin').toggleClass("addCoinOpened");
    }
});