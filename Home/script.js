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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
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
  $('#phone-call').hide();
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('#phone-call').fadeIn();
    }else{
      $('#phone-call').fadeOut();
    }
  });
  $('#phone-call').click(function(){
    $('html, body').animate({
      scrollTop:0
      }, 500);
  });
  new WOW().init();
  // range price
  
  });