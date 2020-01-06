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

function closeMM() {
    $('.offcanvas-menu').removeClass('offcanvas-menu');
}

$(function () {

    selfDescriptionHideShow();
    $(window).resize(function() {
        selfDescriptionHideShow();
    });

    $(".langSelection .dropdown-menu button").click(function() {
        $(location).attr('href', $(this).data("url"));
    });

    /*$('#changeLang').off();
    $('#changeLang').click(function(e) {
        var l = $(this).attr('data-lang');
        alert(l);
        if (l == 'cn') {
            window.location("/zh-CN/index.html");
        } else {
            window.location("/index.html");
        }
        
    });*/

});

