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
      $('button').html('');
      // const element = document.querySelector('h1');
      // element.classList.add('animate__animated', 'animate__faceInDown');
      $(window).scroll(function(event){
        // console.log('vi tru ccua bna');
        // console.log($('html').scrollTop());
        var location = $('html').scrollTop()
        if( location >=200){
          // console.log('xy ly menu');
          $('.nav_header').addClass('new-nav container-fluid');
          $('.submit-property').css({'border-radius': '25px','margin-right':'20px'});
        }else{
          $('.nav_header').removeClass('new-nav') 
          $('.submit-property').css({'border-radius': 'none','margin-right':'0'});

        }
      });

  });