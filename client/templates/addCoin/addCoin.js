Template.addCoin.onCreated(function () {
    this.autorun(() => {
        this.subscribe('coins');
    });
});