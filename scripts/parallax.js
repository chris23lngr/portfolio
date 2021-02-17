window.addEventListener('scroll', function(e) {

    var matches = document.querySelectorAll('img[data-parallax-speed]');
    var scrolled = window.pageYOffset;

    matches.forEach(function(element, index, array) {

        const speed = element.getAttribute('data-parallax-speed');
        var rate = scrolled * -speed;

        element.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
    });

});