var element = document.querySelectorAll('section');

document.addEventListener('scroll', inView);

function inView() {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    for (var i = 0; i < element.length; i++) {
        var elementPosition = element[i].getBoundingClientRect().top + scrollY + element[i].clientHeight;
        if (scrollPosition > elementPosition) {
            element[i].classList.add('inbeeld');
        }
    }
}

inView();
