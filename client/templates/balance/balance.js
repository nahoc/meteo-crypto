Template.balance.helpers({
    balance: function() {
        if(Session.get('balance')) {
            return Session.get('balance');
        } else {
            return 0;
        }
    },
});