jQuery(document).ready(function($) {
  $('.jumpto').click(function(e) {
    var target = $(this).attr('id');
    $('html, body').animate(
      {
        scrollTop: $('#' + target + '-section').offset().top
      },
      1000
    );

    e.preventDefault();
  });
});
