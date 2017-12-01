Template.balance.onCreated(function () {
    this.autorun(() => {
        this.subscribe('coins');
    });
});

Template.balance.helpers({
    balance: function() {
        
    },
});