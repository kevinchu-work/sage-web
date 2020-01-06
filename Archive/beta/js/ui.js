function selfDescriptionHideShow() {
    //Handling Self-description Layout
    //console.log($(window).height());
    
    var sizing = $(window).height() * $(window).width();

    if ( (sizing < 400000) || ($(window).height() < 800)) {
        $('.companyView-overlay').hide();
        $('.companyView-addition').show();
    } else {
        $('.companyView-overlay').show();
        $('.companyView-addition').hide();
    }
}


$(function () {

    selfDescriptionHideShow();
    $(window).resize(function() {
        selfDescriptionHideShow();
    });

});