$(document).ready( function () {
  var addContent = new AddContent();

  $('#add-property').submit( function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var description = $('#description').val();
    var startdate = $('startdate').val();
    addContent.addTitle(title)
    addContent.addDescription(description);
    addContent.addDate(startdate);
    $('#display-title').text(addContent.getTitle());
    $('#display-description').text(addContent.getDescription());
    $('#display-date').text(addDate.getDate());
  });

});
