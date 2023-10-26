$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    cssEase: 'linear',
    arrows:true,
    prevArrow: '<div class="slick-arrow prev"><span class="fa fa-angle-left"></span></div>',
    nextArrow: '<div class="slick-arrow next"><span class="fa fa-angle-right"></span></div>',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
    // Gán sự kiện submit cho form
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
      $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
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
      $("#playButton").click(function() {
        $("#videoContainer").fadeIn(); // Hiển thị video container
        $("#video")[0].play(); // Phát video
    });
  
    $("#closeButton").click(function() {
        $("#videoContainer").fadeOut(); // Ẩn video container khi nhấn nút đóng
        $("#video")[0].pause(); // Tắt video
    });  
    // validator
    $('form').submit(function (event) {
      var valid = true;

      // Clear any previous error messages and reset input borders
      $('.error-message').remove();
      $('.error-input').removeClass('error-input');

      // Check the textarea
      var commentTextarea = $('textarea[name="comment"]');
      if (commentTextarea.val().trim() === '') {
          valid = false;
          commentTextarea.after('<div class="error-message">Vui Lòng Để Lại Ý Kiến Của Bạn</div>');
          commentTextarea.addClass('error-input');
      }

      // Check the name input
      var nameInput = $('input[name="name"]');
      if (nameInput.val().trim() === '') {
          valid = false;
          nameInput.after('<div class="error-message">Trường Tên Không Được Để Trống !</div>');
          nameInput.addClass('error-input');
      }

      // Check the email input
      var emailInput = $('input[name="email"]');
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailInput.val().trim() === '' || !emailPattern.test(emailInput.val())) {
          valid = false;
          emailInput.after('<div class="error-message">Email Không được để trống!</div>');
          emailInput.addClass('error-input');
      }

      // Check the phone input
      var phoneInput = $('input[name="phone"]');
      if (phoneInput.val().trim() === '') {
          valid = false;
          phoneInput.after('<div class="error-message">Vui Lòng Nhập Số Điện Thoại</div>');
          phoneInput.addClass('error-input');
      }

      if (!valid) {
          event.preventDefault(); // Prevent the form from submitting if there are errors
      } else {
           // Form submission was successful
           $('.alert-success').text('Message sent successfully');
           $('.alert-success').show();
           // Hide the success message after 2 seconds
           setTimeout(function() {
               $('.alert-success').fadeOut();
           }, 2000);
      }
  });
           
            $('#sidebar-form').submit(function (event) {
              var valid = true;
              // Clear any previous error messages
              $('.error-message').remove();
               $('.error-input').removeClass('error-input');
              // Check the textarea
              var commentTextarea = $('textarea[name="comment"]');
              if (commentTextarea.val().trim() === '') {
                  valid = false;
                  commentTextarea.after('<div class="error-message">Vui Long Nhap Y Kien Cua Ban!</div>');
                    commentTextarea.addClass('error-input');
              }

              // Check the name input
              var nameInput = $('input[name="name"]');
              if (nameInput.val().trim() === '') {
                  valid = false;
                  nameInput.after('<div class="error-message">Truong Ten Khong duoc de trong</div>');
                     nameInput.addClass('error-input');
              }

              // Check the email input
              var emailInput = $('input[name="email"]');
              var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              if (emailInput.val().trim() === '' || !emailPattern.test(emailInput.val())) {
                  valid = false;
                  emailInput.after('<div class="error-message">Email chua dung dinh dang</div>');
                  emailInput.addClass('error-input');
              }
              if (!valid) {
                  event.preventDefault(); // Prevent the form from submitting if there are errors
              }
          });
});