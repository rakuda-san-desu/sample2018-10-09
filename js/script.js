$(function() {
  //  メニュー
  $('#openBtn').click(function() {
   var $headerNavShow = $('#headerNavShow');
   if($headerNavShow.hasClass('open')) {
     $headerNavShow.removeClass('open');
     $headerNavShow.slideUp();
     $('#openBtn').html('サイトメニュー<i class="fa fa-bars" aria-hidden="true"></i>');
    } else {
     $headerNavShow.addClass('open');
     $headerNavShow.slideDown();
     $('#openBtn').html('メニューを閉じる<i class="fa fa-times-circle" aria-hidden="true"></i>');
   }
 });

  // スライダー
  $(document).ready(function() {
    $('.bxslider').bxSlider({
      slideWidth: 1400,
      auto: true,
      speed: 2000,
      pause: 4000
    });
  });

});
