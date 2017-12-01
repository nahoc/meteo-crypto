Template.header.events({
  'click .navigationButton'(event) {
    const target = event.target;
    $('.is-active').removeClass('is-active');
    $(target).parent('li').addClass('is-active');
    FlowRouter.go('/' + target.id);
    $('.balance').slideUp("fast");
  },

  'click .toggle-balance'(event) { 
    $('.balance').slideDown("fast");
  },
});