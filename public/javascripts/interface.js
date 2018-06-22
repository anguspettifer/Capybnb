$(document).ready( function () {
  var addContent = new AddContent();

  $('#add-property').submit( function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var description = $('#description').val();
    var email = $('#email').val();
    var startDate = $('#start').val();
    var endDate = $('#end').val();
    addContent.addTitle(title)
    addContent.addDescription(description);
    addContent.addEmail(email);
    addContent.addStartDate(startDate);
    addContent.addEndDate(endDate);
    $('#display-title').text(addContent.getTitle());
    $('#display-description').text(addContent.getDescription());
    $('#display-email').text(addContent.getEmail());
    $('#display-start-date').text(addContent.getStartDate());
    $('#display-end-date').text(addContent.getEndDate());
  });

});
