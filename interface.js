$(document).ready(function(){

  $('#addtitle').click(function(){
    event.preventdefault();
    var title = $('#title').val();
    $('#display-title').text(title);
  })
});
