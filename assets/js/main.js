const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true },
});

// Body color
scroll.on('scroll', () => {
    if (document.querySelector("#color.is-inview")){
        document.body.style.background = "#000101";
        document.body.style.color = "#fefeff";
    } else {
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";
    }
});

// Curseur de la souris
const bulle = document.createElement("div");
bulle.classList.add('bulle');
document.body.appendChild(bulle);

// Rendre la bulle visible et donner des coordonnées au curseur
const circleBehaviour = (e) => {
    bulle.style.display = "block" 
    bulle.style.opacity = 1
    bulle.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`
    bulle.style.transition = "0.15s"
}
// J'ajoute un ecouteur d'événement dans le DOM
// Pour Déclencher la fonction circleBehaviour ( maj des styles de la bulle en fonction de la position de la souris)
document.addEventListener("mousemove", (e) => {
    circleBehaviour(e)
});
// J'ajoute un evenement pour rendre la souris invisble
document.addEventListener("mouseout", (e) => {
    bulle.style.opacity = 0
});
// Pour que la bulle remonte au scroll
document.addEventListener("wheel", (e) => {
    bulle.style.display = "block"
    bulle.style.opacity = 1
    bulle.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`
    bulle.style.transition = "0.15s"
});
function activateIcon(id) {
    var icon = document.getElementById("icon" + id.substring(4));
    icon.classList.add("active");
}
//  End Curseur de la souris