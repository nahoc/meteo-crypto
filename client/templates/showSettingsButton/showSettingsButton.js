Template.showSettingsButton.events({
    'click .showSettingsButton'(event) {
      $('.is-active').removeClass('is-active');
      $('.balance').slideUp("fast");
      FlowRouter.go('/settings');
    },
  });