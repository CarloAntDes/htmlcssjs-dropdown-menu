/*
Creare un menù a comparsa e scomparsa che abbia al suo interno
anche dei sotto menù
*/

function open_close_menu() {
  var open_close = $(".menu");
  console.log(open_close);
  open_close.mouseenter(function() {
    console.log($(this));
    var delete_display_none = $(this).children(".cont-sub-menu")
    delete_display_none.removeClass("hidden")
  });
  open_close.mouseleave(function() {
    var add_display_none = $(this).children(".cont-sub-menu")
    add_display_none.addClass("hidden")
  });
}










function all_function() {

  open_close_menu()
}

$(document).ready(all_function);
