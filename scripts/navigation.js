window.addEventListener('scroll', function(e) {

    var height = jQuery(window).height(); 
    var offset = window.pageYOffset;

    console.log('h: ' + height);
    console.log('o:' + offset);

    
    if(offset > height - 130) {

        var element = document.getElementById("navbar");
        $(element).addClass( "fixed" );
        $(element).removeClass( "normal" );
    } else {
        var element = document.getElementById("navbar");
        $(element).addClass( "normal" );
        $(element).removeClass( "fixed" );
    }
    

});