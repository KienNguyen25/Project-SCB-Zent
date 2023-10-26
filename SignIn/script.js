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

    //validator form
    // Form validation for Đăng Nhập
    $('#signin').submit(function (event) {
        var valid = true;

        // Clear any previous error messages
        $('.error-message').remove();

        // Check Email field
        var emailInput = $('#signin input[type="email"]');
        if (emailInput.val().trim() === '') {
            valid = false;
            emailInput.after('<div class="error-message">Email không được để trống</div>');
        }

        // Check Password field
        var passwordInput = $('#signin input[type="password"]');
        if (passwordInput.val().trim() === '') {
            valid = false;
            passwordInput.after('<div class="error-message">Password không được để trống</div>');
        }

        if (!valid) {
            event.preventDefault(); // Prevent the form from submitting if there are errors
        }
    });

    // Form validation for Đăng Ký
    $('#signup').submit(function (event) {
        var valid = true;

        // Clear any previous error messages
        $('.error-message').remove();

        // Check Họ Và Tên field
        var nameInput = $('#signup input[name="name"]');
        if (nameInput.val().trim() === '') {
            valid = false;
            nameInput.after('<div class="error-message">Họ Và Tên không được để trống</div>');
        }

        // Check Mật Khẩu field
        var passwordInput = $('#signup input[type="password"]');
        if (passwordInput.eq(0).val().trim() === '') {
            valid = false;
            passwordInput.eq(0).after('<div class="error-message">Mật Khẩu không được để trống</div>');
        }

        // Check Nhập Lại Mật Khẩu field
        if (passwordInput.eq(1).val().trim() === '' || passwordInput.eq(1).val() !== passwordInput.eq(0).val()) {
            valid = false;
            passwordInput.eq(1).after('<div class="error-message">Nhập lại Mật Khẩu không khớp</div>');
        }

        // Check Email field
        var emailInput = $('#signup input[type="email"]');
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailInput.val().trim() === '' || !emailPattern.test(emailInput.val())) {
            valid = false;
            emailInput.after('<div class="error-message">Email không hợp lệ</div>');
        }

        // Check Số Điện Thoại field
        var phoneInput = $('#signup input[name="phone"]');
        if (phoneInput.val().trim() === '' || isNaN(phoneInput.val())) {
            valid = false;
            phoneInput.after('<div class="error-message">Số Điện Thoại không hợp lệ</div>');
        }

        if (!valid) {
            event.preventDefault(); // Prevent the form from submitting if there are errors
        }
    });
});