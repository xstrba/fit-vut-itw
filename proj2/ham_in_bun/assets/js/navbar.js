$(document).ready(function(){

    var offset = $('.navbar ul').offset().top;
    var coffset = $('.content').offset().top;

    function getScrollInfo(){

        if($(window).scrollTop() > offset){
            $('#scrolltop').css('display', 'inline-block');
            $('.navbar ul').css('vertical-align', '100%');
            $('.logo').addClass('logo_small');
            $('.navbar').css('position', 'fixed');
            $('.content').css('top', coffset);
            $('footer').css('top', coffset);
        }
        else{
            $('#scrolltop').hide();
            $('.navbar ul').css('vertical-align', '0%');
            $('.logo').removeClass('logo_small');
            $('.navbar').css('position', 'relative');
            $('.content').css('top', '0');
            $('footer').css('top', '0');
        }

    };

    getScrollInfo();

    $(window).scroll(function(){
        getScrollInfo();
    });

    $('#scrolltop').click(function(){
        $(window).scrollTop(0);
    });

});
