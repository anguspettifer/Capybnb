$(document).ready( function () {
  var addContent = new AddContent();

  $('#addtitle').click(function(){
    event.preventdefault();
    var title = $('#title').val();
    $('#display-title').text(title);
  })

  $('#add-property').submit( function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var description = $('#description').val();
    addContent.addTitle(title)
    addContent.addDescription(description);
    $('#display-title').text(addContent.getTitle());
    $('#display-description').text(addContent.getDescription());
  });

});
