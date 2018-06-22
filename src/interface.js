$(document).ready( function () {
  var addContent = new AddContent();

  $('#add-property').submit( function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var description = $('#description').val();
    var startDate = $('#start').val();
    var endDate = $('#end').val();
    addContent.addTitle(title)
    addContent.addDescription(description);
    addContent.addStartDate(startDate);
    addContent.addEndDate(endDate);
    $('#display-title').text(addContent.getTitle());
    $('#display-description').text(addContent.getDescription());
    $('#display-start-date').text(addContent.getStartDate());
    $('#display-end-date').text(addContent.getEndDate());
  });

});
