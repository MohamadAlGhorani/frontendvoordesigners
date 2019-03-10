//// get the element to animate
//var element = document.querySelectorAll('section');
//
//// listen for scroll event and call animate function
//document.addEventListener('scroll', animate);
//
//// check if element is in view
//function inView() {
//
//    // get window height
//    var windowHeight = window.innerHeight;
//    // get number of pixels that the document is scrolled
//    var scrollY = window.scrollY || window.pageYOffset;
//
//    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//    var scrollPosition = scrollY + windowHeight;
//
//      // get element position (distance from the top of the page to the bottom of the element)
//    for (var i = 0; i < element.length; i++) {
//        var elementHeight = element[i].clientHeight;
//        var elementPosition = element[i].getBoundingClientRect().top + scrollY + elementHeight;
//    }
//
//    // is scroll position greater than element position? (is element in view?)
//    if (scrollPosition > elementPosition) {
//        return true;
//    }
//
//    return false;
//}
//
//// animate element when it is in view
//function animate() {
//    // is element in view?
//    if (inView()) {
//        // element is in view, add class to element
//        for (var i = 0; i < element.length; i++) {
//            element[i].classList.add('inbeeld');
//        }
//    }
//}
///////////////////////////--------------------------------------------------/////////////////////
var element = document.getElementById('schilderijen');
var elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);


function inView() {

    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

function animate() {
    if (inView()) {
        element.classList.add('inbeeld');
    }
}
//// tweede section////
var element2 = document.getElementById('posters');
var elementHeight2 = element.clientHeight;

document.addEventListener('scroll', animate2);

function inView2() {

  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element2.getBoundingClientRect().top + scrollY + elementHeight2;
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

function animate2() {
  if (inView2()) {
      element2.classList.add('inbeeld');
  }
}


/// deerde section////
var element3 = document.getElementById('wow');
var elementHeight3 = element.clientHeight;

document.addEventListener('scroll', animate3);

function inView3() {

  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element3.getBoundingClientRect().top + scrollY + elementHeight3;
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}


function animate3() {
  if (inView3()) {
      element3.classList.add('inbeeld');
  }
}

////vierde section/////
var element4 = document.getElementById('artis');
var elementHeight4 = element.clientHeight;

document.addEventListener('scroll', animate4);

function inView4() {

  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element4.getBoundingClientRect().top + scrollY + elementHeight4;
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

function animate4() {
  if (inView4()) {
      element4.classList.add('inbeeld');
  }
}
////fijvde section/////
var element5 = document.getElementById('tijdschriften');
var elementHeight5 = element.clientHeight;

document.addEventListener('scroll', animate5);

function inView5() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element5.getBoundingClientRect().top + scrollY + elementHeight5;
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

function animate5() {
  if (inView5()) {
      element5.classList.add('inbeeld');
  }
}




