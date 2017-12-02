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
    formatCurrency: function(price) {
      return price.replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();  
    },
});

Template.registerHelper('arrayify',function(obj){
    var result = [];
    for (var key in obj) result.push({name:key, value:obj[key]});
    return result;
});

Template.registerHelper('isNegative',function(value){
    if(value.indexOf('-') !== -1) {
        return "text--red";
    }
});