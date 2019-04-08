var uri = 'https://open.data.amsterdam.nl/Activiteiten.json';
var section = document.querySelector('main section:last-of-type');
var back = document.querySelector('header button');
var form = document.querySelector('header form');
var lijst = document.querySelector('main section:first-of-type');

(function request() {
    fetch(uri)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showData(data);
        })
})()

function showData(jsonObj) {
    var activiteiten = jsonObj;
    for (var i = 0; i < activiteiten.length; i++) {
        var x = document.createElement('h3');
        x.textContent = ('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        var knop = document.createElement('button');
        knop.textContent = ('Toevoegen')
        var images = document.createElement('img');
        images.src = activiteiten[i].media[0].url;
        var article = document.createElement('article');
        article.setAttribute('tabIndex', i);
        article.focus();
        article.textContent = activiteiten[i];
        var activiteitenTitelNone = document.createElement('h2');
        activiteitenTitelNone.textContent = activiteiten[i].title;
        var activiteitenTitel = document.createElement('h2');
        activiteitenTitel.textContent = activiteiten[i].title;
        var activiteitenDetails = document.createElement('p');
        activiteitenDetails.textContent = activiteiten[i].details.nl.shortdescription;
        var activiteitenlocation = document.createElement('p');
        activiteitenlocation.textContent = activiteiten[i].location.adress + ', ' + activiteiten[i].location.city;

        article.appendChild(images);
        article.appendChild(x);
        article.appendChild(activiteitenTitel);
        article.appendChild(activiteitenDetails);
        article.appendChild(activiteitenlocation);
        article.appendChild(knop);
        article.appendChild(activiteitenTitelNone);
        section.appendChild(article);

        knop.addEventListener("click", function () {
            var deze = this.parentElement.lastElementChild.innerHTML;
            var titel = document.createElement('h2');
            titel.textContent = deze;
            var ar = document.createElement('article');
            ar.appendChild(titel);
            lijst.appendChild(ar);
            console.log('winnaar');
            this.classList.add('done');

        });
    }
}

window.addEventListener("keydown", function (e) {
    if (e.code == "KeyB") {
        form.submit();
    }
}, true);

function inView() {
    var element = document.querySelectorAll("main > section:last-of-type article");
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
document.addEventListener('scroll', inView);
