// JS from demos2
$(document).ready(function(){
  $("button").click(function(){
    $("article").toggle();
  });
});


// The code below taken from Stack Overflow from same issue from someone else's problem.

//this will execute on page load(to be more specific when document ready event occurs)
if ($('.ty-compact-list').length > 3) {
  $('.ty-compact-list:gt(2)').hide();
  $('.btn-heroes-pages').show();
}

$('.btn-heroes-pages').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.ty-compact-list:gt(2)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});