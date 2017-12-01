Template.portfolio.onCreated(function () {
    this.autorun(() => {
        this.subscribe('coins');
    });
});

Template.portfolio.helpers({
    coinsListPortfolio: function() {
        return Coins.find();
    },
    coinsList: function() {
        return Session.get('coinsList');
    },
    coinIsOwned(coinName) {
        const coinAmount = Coins.findOne({ name: coinName });
        if(coinAmount){
            return true;
        }
    },
    coinAmount(coinName) {
        return Coins.findOne({ name: coinName }).amount;
    },
});

Template.portfolio.events({
    'submit .portfolioForm'(event) {
        // Prevent default browser form submit
        event.preventDefault();
     
        // Insert a task into the collection
        console.log(Coins);
      },
});