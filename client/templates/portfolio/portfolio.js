Template.portfolio.onCreated(function () {
    this.autorun(() => {
        this.subscribe('coins');
    });
    updateBalance();
});

Template.portfolio.helpers({
    coinsListPortfolio: function () {
        return Coins.find();
    },
    coinsList: function () {
        return Session.get('coinsList');
    },
    coinIsOwned(coinName) {
        const coinAmount = Coins.findOne({
            name: coinName
        });
        if (coinAmount) {
            return true;
        }
    },
    coinAmount(coinName) {
        return Coins.findOne({
            name: coinName
        }).holdingQty;
    },
});

function updateBalance() {
    Meteor.call("updateBalance", function (e, response) {
        if (e) {
            console.log('Error: ' + e);
        } else {
            return Session.set('balance', response[0].holdingValue.toFixed(2));
        }
    });
}

Template.portfolio.events({
    'focusout .portfolioInput': function (event, template) {
        const target = event.target;
        const coinName = target.name;
        const coinQty = Number(target.value);
        const coinValue = Number(target.id);
        const holdingValue = coinValue * coinQty;

        selectedCoin = Coins.findOne({
            name: coinName
        });

        if (selectedCoin) {
            Coins.update(selectedCoin._id, {
                $set: {
                    holdingQty: coinQty,
                    holdingValue: holdingValue,
                }
            });
        } else {
            Coins.insert({
                name: coinName,
                amount: coinValue,
                holdingQty: coinQty,
                holdingValue: holdingValue,
            });
        }

        updateBalance();
    }
});