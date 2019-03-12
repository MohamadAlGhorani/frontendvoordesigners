var element = document.querySelectorAll('section');

document.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    for (var i = 0; i < element.length; i++) {
        var elementPosition = element[i].getBoundingClientRect().top + scrollY + element[i].clientHeight;
        if (scrollPosition > elementPosition) {
            element[i].classList.add('inbeeld');
        }
    }
}, true);
