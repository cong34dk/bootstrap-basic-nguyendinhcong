// Set cho header có chiều cao bằng 100% chiều cao màn hình
$(document).ready(function(){
    $('.header').height($(window).height());
})

//click vào thẻ <a> trong phần navbar thì trang sẽ cuộn mượt mà đến vị trí tương ứng:
$(document).ready(function(){
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});