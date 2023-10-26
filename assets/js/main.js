const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true },
    smartphone: { smooth: true },
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

// // Curseur de la souris
// const bulle = document.createElement("div");
// bulle.classList.add('bulle');
// document.body.appendChild(bulle);

// const circleBehaviour = (e) => {
//     bulle.style.display = "block" 
//     bulle.style.opacity = 1
//     bulle.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`
//     bulle.style.transition = "0.15s"
// }

// document.addEventListener("mousemove", (e) => {
//     circleBehaviour(e)
// });

// document.addEventListener("mouseout", (e) => {
//     bulle.style.opacity = 0
// });

// document.addEventListener("wheel", (e) => {
//     bulle.style.display = "block"
//     bulle.style.opacity = 1
//     bulle.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`
//     bulle.style.transition = "0.15s"
// });
// function activateIcon(id) {
//     var icon = document.getElementById("icon" + id.substring(4));
//     icon.classList.add("active");
// }
