Template.showSettingsButton.events({
    'click .showSettingsButton'(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      FlowRouter.go('/settings');
    },
  });