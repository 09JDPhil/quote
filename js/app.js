var colors = ['#63DDE6', '#6374E6', '#D6833E', '#45D63E', '#CF3ED6', '#3E91D6', '#21CF24', '#ED3232', '#00D9D9', '#6DD900'];
var url="http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var tweet;
function getQuote(data){
  $("#quote").text(data.quoteText); 
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  } 
  tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' -' + data.quoteAuthor;
  $("#author").text('- ' + data.quoteAuthor);
  $("#tweet-button").attr("href", tweet);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
  var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
      backgroundColor: colors[color],
      color: colors[color]
    }, 1000);
    $(".button").animate({
      backgroundColor: colors[color]
    }, 1000);
    $(".footer").animate({
      backgroundColor: colors[color]
    }, 1000)
});
$("#newQuote").on("click",function() {
  $.getJSON(url, getQuote, 'jsonp');
  var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
      backgroundColor: colors[color],
      color: colors[color]
    }, 1000);
    $(".button").animate({
      backgroundColor: colors[color]
    }, 1000);
    $(".footer").animate({
      backgroundColor: colors[color]
    }, 1000)
});
$("#tweet-button").on("click", function(){
 window.open(tweet);
});