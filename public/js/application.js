$(document).ready(function() {
  $('.loading').show();
  $('#tweeter_form').on('submit', function(event) {
    event.preventDefault();
    //console.log($('input[name="tweeter"]').val());
    $.get('/' + $('input[name="tweeter"]').val(), function(tweetData) {
      $('.loading').show();
      $('.tweets').html(tweetData);
    });
    //showLoader = setTimeout("$('.loading').show()", 300);
  });
  if ($('#load_wait').length === 0){
    $('.loading').show();
  } else {
    $('.loading').show();
  };
});




