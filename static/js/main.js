$(function() {
    $('.product-mini-holder:nth-of-type(4n)').addClass('ie-nth-child'); // IE last el in the row fallback support

    // Show popup
    $('.show-popup').click(function(event){
        event.preventDefault();
        $('.popup-container').addClass('showing');
        $('html').css({'overflow':'hidden'})
    });
    // Hide popup
    $('.hide-popup').click(function(event){
        event.preventDefault();
        $('.popup-container').removeClass('showing');
        $('html').css({'overflow':''})
    });
});