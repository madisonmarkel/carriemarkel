// SMOOTH SCROLL
$(document).ready(function(){
  // $('a[href^="#"]').on('click',function (e) {
  //     e.preventDefault();

  //     var target = this.hash;
  //     var $target = $(target);

  //     $('html, body').stop().animate({
  //         'scrollTop': $target.offset().top
  //     }, 900, 'swing', function () {
  //         window.location.hash = target;
  //     });
  // });

// MENU
function navigation() {
  $('#js_menu_expander').click(function(event) {
    event.preventDefault();
    $('#js_show_nav').show(1000);
    $('#js_menu_expander').hide();
    $('#js_close_menu').show();
  });
  $('#js_close_menu').click(function(event) {
    event.preventDefault();
    $('#js_show_nav').hide(1000);
    $('#js_close_menu').hide();
    $("#js_menu_expander").show();
  });

  $('.js_click_close').click(function(event) {
    event.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
    $('#js_show_nav').hide(1000);
    $('#js_close_menu').hide();
    $("#js_menu_expander").show();
  });
};
navigation();

});
