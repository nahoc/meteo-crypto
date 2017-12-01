FlowRouter.route('/', {
  action: function() {
    FlowRouter.go('/market');
  },
});

FlowRouter.route('/portfolio', {
  action: function() {
    BlazeLayout.render('portfolio');
  },
});

FlowRouter.route('/market', {
  action: function() {
    BlazeLayout.render('market');
  },
});

FlowRouter.route('/settings', {
  action: function() {
    BlazeLayout.render('settings');
  },
});