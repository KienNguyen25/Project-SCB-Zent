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
            
    $('#myForm').submit(function(e) {
        // Ngăn chặn hành động mặc định của form (không gửi đi)
        e.preventDefault();
        
        // Kiểm tra dữ liệu trường Tên
        var name = $("input[placeholder='Tên của bạn']").val();
        if (name.trim() === '') {
            alert('Vui lòng nhập Tên của bạn');
            return;
        }

        // Kiểm tra dữ liệu trường Email
        var email = $("input[placeholder='Email']").val();
        if (email.trim() === '') {
            alert('Vui lòng nhập Email');
            return;
        }

        // Kiểm tra dữ liệu trường Số điện thoại
        var phone = $("input[placeholder='Số của bạn']").val();
        if (phone.trim() === '') {
            alert('Vui lòng nhập Số điện thoại');
            return;
        }

        // Kiểm tra dữ liệu trường Loại sản phẩm
        var productType = $("input[placeholder='Loại sản phẩm']").val();
        if (productType.trim() === '') {
            alert('Vui lòng chọn Loại sản phẩm');
            return;
        }

        // Kiểm tra dữ liệu trường Tin nhắn
        var message = $("textarea[placeholder='Enter message']").val();
        if (message.trim() === '') {
            alert('Vui lòng nhập Tin nhắn');
            return;
        }

        // Kiểm tra checkbox
        var checkbox = $("#flexCheckIndeterminate").is(':checked');
        if (!checkbox) {
            alert('Vui lòng đồng ý với điều khoản');
            return;
        }

        // Nếu tất cả dữ liệu hợp lệ, bạn có thể gửi dữ liệu lên máy chủ ở đây
        // Sử dụng AJAX hoặc một phương thức khác để xử lý việc gửi dữ liệu.

        // Nếu không có lỗi, bạn có thể gửi dữ liệu
        // Thay thế `alert` bằng lệnh gửi dữ liệu
        alert('Dữ liệu đã được gửi thành công!');

        
    });
});
