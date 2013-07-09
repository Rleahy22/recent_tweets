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


  $('.tweeting').hide();
  $('#post_tweets').on('submit', function(event) {
    event.preventDefault();
    $('.tweeting').show();
    console.log($(this));
    var data = $('textarea').serialize();
    $.post('/new_tweet', data, function(response) {
      $('.tweeting').hide();
    });
  });
});
