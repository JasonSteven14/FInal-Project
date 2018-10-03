console.log('antes')
$(document).ready( function(){
    $('#carouselOffersButton').click(function(){
        if($('#carouselOffersButton').children('span').hasClass('fa-pause')){
            $('#carousel-offers').carousel('pause');
            $('#carouselOffersButton').children('span').removeClass('fa-pause');
            $('#carouselOffersButton').children('span').addClass('fa-play');
        }
        else if($('#carouselOffersButton').children('span').hasClass('fa-play')){
            $('#carousel-offers').carousel('cycle');
            $('#carouselOffersButton').children('span').removeClass('fa-play');
            $('#carouselOffersButton').children('span').addClass('fa-pause');
        }
    })
})
console.log('despues')