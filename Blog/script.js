$(document).ready(function(){
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
      $('#id-form').submit(function (event) {
        var valid = true;

        // Clear any previous error messages
        $('.error-message').remove();

        // Check "Tên của bạn" field
        var nameInput = $('#id-form input[placeholder="Tên của bạn"]');
        if (nameInput.val().trim() === '') {
            valid = false;
            nameInput.after('<div class="error-message">Vui lòng nhập Tên của bạn</div>');
        }

        // Check "Email" field
        var emailInput = $('#id-form input[placeholder="Email"]');
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailInput.val().trim() === '' || !emailPattern.test(emailInput.val())) {
            valid = false;
            emailInput.after('<div class="error-message">Vui lòng nhập Email hợp lệ</div>');
        }

        // Check "Viết lời nhắn" textarea
        var messageTextarea = $('#id-form textarea');
        if (messageTextarea.val().trim() === '') {
            valid = false;
            messageTextarea.after('<div class="error-message">Vui lòng viết lời nhắn</div>');
        }

        if (!valid) {
            event.preventDefault(); // Prevent the form from submitting if there are errors
        }
    });
            
});