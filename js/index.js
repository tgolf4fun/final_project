    $(document).ready(function(){
    console.log("LETS GO!!");
    $('#hdr-menu').hide();

     $('#dg-menu').click(menuAction);

    function menuAction(){
    event.preventDefault();
    $('#hdr-menu').fadeIn(2000);
    $('.main-up').hide();
    $('.main-dn').hide();
    $('#submit-btn').hide();
    $('#index-scroll').hide();
     }

    });