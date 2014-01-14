$(function(){

  //Menu Toggle
  var $menu = $('.main-nav ul'),
      $menulink = $('.menu-toggle');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

});