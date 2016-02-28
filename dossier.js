$(document).ready(function(){
    $('#owl-example').owlCarousel({
        items : 2,
        autoWidth: true,
        navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false
    });
        $('.dossier').onclick(function(){
            $(this).find('.card').addClass('flipped').mouseleave(function(){
                $(this).removeClass('flipped');
            });
            return false;
    });
});