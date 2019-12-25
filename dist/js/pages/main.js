
// switching phone in header
var phoneMas = ['.tel-phone__rus', '.tel-phone__ucr', '.tel-phone__brus'];
var listClass = ['selectRus', 'selectUcr', 'selectBrs'];
$('select[name="example"]').change(function(){
    var el = $(this).val();
    for (var i = 1; i < 4; i++) {
        if(el == i) {
            $('.tel-phone__item').removeClass('active');
            $(this).removeClass();
            $(this).addClass(listClass[i-1]);
            $(phoneMas[i-1]).addClass('active');
        }
    }
});


//

$('.card-product__border-btn').click(function () {
    $(this).parent().parent().children().toggleClass('active');
    $(this).parent().parent().parent().parent().toggleClass('active');
    $(this).parent().parent().toggleClass('active');
});

$(document).mouseup(function (e){
    var div = $(".card-product.active");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.card-product__border-btn').parent().parent().children().removeClass('active');
        $('.card-product__border-btn').parent().parent().parent().parent().removeClass('active');
        $('.card-product__border-btn').parent().parent().removeClass('active');
    }
});

$('.list-logos__hidden-link').click(function () {
    if($(this).hasClass('active')) {
        $(this).text('Остальные 20');
        $(this).removeClass('active');
        $(this).siblings('.list-logos__hidden-block').removeClass('active');
    } else {
        $(this).text('Скрыть');
        $(this).addClass('active');
        $(this).siblings('.list-logos__hidden-block').addClass('active');
    }
});

//animation scroll
$(function(){
    $('.main-menu__link[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 500);
    });
});

//
$('.container-burger').click(function () {
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active');
});

$('.main-menu__close').click(function () {
    $('.container-burger').removeClass('active');
    $('.main-menu').removeClass('active');
});

jQuery(function($){
    $(document).mouseup(function (e){
        var divMenu = $(".main-menu");
        if (!divMenu.is(e.target) && divMenu.has(e.target).length === 0) {
            $('.container-burger').removeClass('active');
            divMenu.removeClass('active');
        }
    });
});