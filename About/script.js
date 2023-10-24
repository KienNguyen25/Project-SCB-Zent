$(document).ready(function(){
  // header
  $(window).scroll(function(event){
    // console.log('vi tru ccua bna');
    // console.log($('html').scrollTop());
    var location = $('html').scrollTop()
    if( location >=200){
      $('#navbar').addClass('new-nav');
      // $('.submit-property').css({'border-radius': '25px','margin-right':'20px'});
    }else{
      $('#navbar').removeClass('new-nav') 
      // $('.submit-property').css({'border-radius': 'none','margin-right':'0'});
    }
  });
    $('.post-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-arrow prev  "><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="slick-arrow next  "><span class="fa fa-angle-right"></span></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
        // backtop
  $('#backtop').hide();
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('#backtop').fadeIn();
    }else{
      $('#backtop').fadeOut();
    }
  });
  $('#backtop').click(function(){
    $('html, body').animate({
      scrollTop:0
      }, 500);
  });
  new WOW().init();
    
});