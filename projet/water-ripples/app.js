//Background
jQuery(document).ready(function () {
    "use strict";

    $(".background").ripples({
        resolution: 556,
        dropRadius: 30,
        perturbance: 0.04
    });

    // Automatic drops
    // setInterval(function() {
    //     var $el = $(".slider");
    //     var x = Math.random() * $el.outerWidth();
    //     var y = Math.random() * $el.outerHeight();
    //     var dropRadius = 20;
    //     var strength = 0.04 + Math.random() * 0.04;

    //     $el.ripples("drop", x, y, dropRadius, strength);
    // }, 400);
});

// Titre
const titre = new Blotter.Text("About", {
    family: "'EB Garamond', serif",
    size: 50,
    fill: "black"
});

const text = new Blotter.Text({
    family: "'EB Garamond', serif",
    size: 10,
    fill: "black"
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.01;
material.uniforms.uSeed.value = 0.1;

let blot = new Blotter(material, {
    texts: titre
});

// let blotte = new Blotter(material, {
//     texts: left
// });


// let blop = blotte.forText(left);
// let gauche = document.querySelector(".text");
// blop.appendTo(gauche);

let app = blot.forText(titre);
let element = document.querySelector(".titre");
app.appendTo(element);



var text1 = new Blotter.Text("Hello, je m'appelle Issam Boumarouane et je suis développeur web junior.", text);
var text2 = new Blotter.Text("Ma passion est de donner vie à mes idées pour créer des expériences intéractive.", text);
var text3 = new Blotter.Text("Je suis un esprit créatif, déterminé et surtout orienté solution.", text);
var text4 = new Blotter.Text("J'essai de m'améliorer jour après jour en repoussant mes limites.", text);

var blotter = new Blotter(material, {
    texts: [text1, text2, text3, text4]
});

var scope1 = blotter.forText(text1);
var scope2 = blotter.forText(text2);
var scope3 = blotter.forText(text3);
var scope4 = blotter.forText(text4);

scope1.appendTo(document.querySelector(".text1"));
scope2.appendTo(document.querySelector(".text2"));
scope3.appendTo(document.querySelector(".text3"));
scope4.appendTo(document.querySelector(".text4"));

// $("body").mousemove(function(e) {
//     const formula = (e.pageX * e.pageY) / 2000000 / 1.5;
//     const number = formula.toFixed(1);

//     material.uniforms.uVolatility.value = formula;
//     material.uniforms.uSeed.value = formula;
// });


// Développeur web junior , le développement web est devenu ma passion depuis. J'aime coder autant côté front-end que back-end. La créativité et l'efficacité sont mes points fort principaux quand je crée un site web. Par ailleurs, mon objectif serait de m'expertiser dans ce domaine.

const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});