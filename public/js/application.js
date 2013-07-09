$(document).ready(function() {
  $('.loading').hide();
  $('#tweeter_form').on('submit', function(event) {
    $('p').empty();
    event.preventDefault();
    $('.loading').show();
    $.get('/' + $('input[name="tweeter"]').val(), function(tweetData) {
      $('.loading').hide();
      $('.tweets').html(tweetData);
    });
  });
});
