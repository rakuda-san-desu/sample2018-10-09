$(function() {
  //  メニュー
  $('#openBtn').click(function() {
   var $headerNavShow = $('#headerNavShow');
   if($headerNavShow.hasClass('open')) {
     $headerNavShow.removeClass('open');
     $headerNavShow.slideUp();
     $('#openBtn').text('サイトメニュー▼');
    } else {
     $headerNavShow.addClass('open');
     $headerNavShow.slideDown();
     $('#openBtn').text('メニューを閉じる▲');
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
