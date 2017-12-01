Template.header.events({
  'click .navigationButton'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from element
    const target = event.target;

    // Remove active class from everything
    $('.is-active').removeClass('is-active');
 
    // Add active class
    $(target).parent('li').addClass('is-active');

    FlowRouter.go('/' + target.id);
  },
});