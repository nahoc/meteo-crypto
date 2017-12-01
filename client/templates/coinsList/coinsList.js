if (Meteor.isClient) {
    Session.setDefault('coinsList', null);
    Meteor.call("getCoinsList", 'https://api.coinmarketcap.com/v1/ticker/?limit=6', function (e, response) {
        if (e) {
            console.log('Error: ' + e);
        } else {
            Session.set('coinsList', response.data);
        }
    });
}

Template.coinsList.helpers({
    coinsList: function() {
        return Session.get('coinsList');
    },
});

Template.registerHelper('arrayify',function(obj){
    var result = [];
    for (var key in obj) result.push({name:key, value:obj[key]});
    return result;
});