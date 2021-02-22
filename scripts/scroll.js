var scrollable = document.getElementById('content-wrapper');
const progress = document.getElementById('progress');

scrollable.addEventListener('scroll', function(e) {

    var height = $(window).height(); 
    var offset = scrollable.scrollTop;

    console.log(height);
    console.log(offset);


    if(offset != 0) {

        if(offset > height) {
            $(progress).addClass( "normal" );
            $(progress).removeClass( "progressed" );
        } else {
            $(progress).removeClass( "normal" );
            $(progress).addClass( "progressed" );
        }
    }

});