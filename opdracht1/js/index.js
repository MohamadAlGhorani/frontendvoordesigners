var keuze = document.querySelectorAll('body form input');
var redImages = document.getElementsByClassName('rood');
var greenImages = document.getElementsByClassName('groen');
var yellowImages = document.getElementsByClassName('geel');
var images = document.querySelectorAll('article');

for (var i = 0; i < keuze.length; i++) {
    keuze[i].addEventListener('click', function (event) {
        if (event.target.id == 'rood') {
            for (var i = 0; i < redImages.length; i++) {
                redImages[i].classList.remove('verwijderen');
                redImages[i].classList.remove('verwijderenEerst');
            }
            for (var i = 0; i < greenImages.length; i++) {
                greenImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < greenImages.length; i++) {
                        greenImages[i].classList.remove('verwijderenEerst');
                        greenImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
            for (var i = 0; i < yellowImages.length; i++) {
                yellowImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < yellowImages.length; i++) {
                        yellowImages[i].classList.remove('verwijderenEerst');
                        yellowImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
        } else if (event.target.id == 'groen') {
            for (var i = 0; i < redImages.length; i++) {
                redImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < redImages.length; i++) {
                        redImages[i].classList.remove('verwijderenEerst');
                        redImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
            for (var i = 0; i < greenImages.length; i++) {
                greenImages[i].classList.remove('verwijderen');
                greenImages[i].classList.remove('verwijderenEerst');
            }
            for (var i = 0; i < yellowImages.length; i++) {
                yellowImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < yellowImages.length; i++) {
                        yellowImages[i].classList.remove('verwijderenEerst');
                        yellowImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
        } else if (event.target.id == 'geel') {
            for (var i = 0; i < redImages.length; i++) {
                redImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < redImages.length; i++) {
                        redImages[i].classList.remove('verwijderenEerst');
                        redImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
            for (var i = 0; i < greenImages.length; i++) {
                greenImages[i].classList.add('verwijderenEerst');
                setTimeout(function () {
                    for (var i = 0; i < greenImages.length; i++) {
                        greenImages[i].classList.remove('verwijderenEerst');
                        greenImages[i].classList.add('verwijderen');
                    }
                }, 600);
            }
            for (var i = 0; i < yellowImages.length; i++) {
                yellowImages[i].classList.remove('verwijderen');
                yellowImages[i].classList.remove('verwijderenEerst');
            }
        } else {
            for (var i = 0; i < images.length; i++) {
                images[i].classList.remove('verwijderen');
                images[i].classList.remove('verwijderenEerst');
            }
        }
    }, false);
}
