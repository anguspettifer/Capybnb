$(document).ready( function () {
  var addContent = new AddContent();

  $('#add-property-description').submit( function(event) {
    event.preventDefault();
    var description = $('#description').val();
    addContent.addDescription(description);
    $('#property-description').text(addContent.getDescription());
  });

});
