new WOW().init();
  $(document).ready(function(){
    $('.banner-slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      drag: true,
      fade: true,
      cssEase: 'linear',
      arrows:true,
      prevArrow: '<div class="slick-arrow prev"><span class="fa fa-angle-left"></span></div>',
      nextArrow: '<div class="slick-arrow next"><span class="fa fa-angle-right"></span></div>',
      });
      $('.slick-dots > li > button').html('');
      // const element = document.querySelector('h1');
      // element.classList.add('animate__animated', 'animate__faceInDown');
      // $(window).scroll(function(event){
      //   console.log('vi tru ccua bna');
      //   console.log($('html').scrollTop());
      //   var location = $('html').scrollTop()
      //   if( location >=200){
      //     $('.nav_header').addClass('new-nav container-fluid');
      //     $('.submit-property').css({'border-radius': '25px','margin-right':'20px'});
      //   }else{
      //     $('.nav_header').removeClass('new-nav') 
      //     $('.submit-property').css({'border-radius': 'none','margin-right':'0'});

      //   }
      // });
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      // video
    });
    $("#playButton").click(function() {
      $("#videoContainer").fadeIn(); // Hiển thị video container
      $("#video")[0].play(); // Phát video
  });

  $("#closeButton").click(function() {
      $("#videoContainer").fadeOut(); // Ẩn video container khi nhấn nút đóng
      $("#video")[0].pause(); // Tắt video
  });
     
  $('.tab-pane__description-img').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-arrow prev  "><span class="fa fa-angle-left"></span></div>',
    nextArrow: '<div class="slick-arrow next  "><span class="fa fa-angle-right"></span></div>',
  });

  $('.customer-feedback-container').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-arrow prev  "><span class="fa fa-angle-left"></span></div>',
    nextArrow: '<div class="slick-arrow next  "><span class="fa fa-angle-right"></span></div>',
  });

  $('.post-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-arrow prev  "><span class="fa fa-angle-left"></span></div>',
    nextArrow: '<div class="slick-arrow next  "><span class="fa fa-angle-right"></span></div>',
  });

  });