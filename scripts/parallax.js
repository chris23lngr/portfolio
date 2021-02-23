var element = document.getElementById('content-wrapper');

element.addEventListener('scroll', function(e) {

    var height = $(window).height(); 
    var offset = scrollable.scrollTop;

    var matches = document.querySelectorAll('img[data-parallax-speed]');

    matches.forEach(function(element, index, array) {

        const speed = element.getAttribute('data-parallax-speed');
        var rate = offset * -speed;

        element.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
    });

});

/*
element.addEventListener('scroll', function(e) {

    var matches = document.querySelectorAll('img[data-parallax-speed]');
    var scrolled = element.pageYOffset;

    matches.forEach(function(element, index, array) {

        const speed = element.getAttribute('data-parallax-speed');
        var rate = scrolled * -speed;

        element.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
    });

});
*/