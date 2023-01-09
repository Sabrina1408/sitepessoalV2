let btnMobile = document.querySelector("#btnMobile");
let btnMobileLiA = document.querySelectorAll(".btn-mobile-li-a");
let header = document.querySelector("#header");
let body = document.querySelector(".fadeIn");


btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("click", fixed);
function fixed () {
    const active = nav.classList.contains("active");
    if(active){
        body.style.position = "fixed";
    } else {
        body.style.position = "static";
    }
}
function toggleMenu(event) {
    let nav = document.querySelector("#nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
        arrayLiAs = Array.from(btnMobileLiA);
        arrayLiAs.forEach(liAs => {
            liAs.addEventListener("click", toggleMenu);
        });
        //header.style.position = "fixed";
        //header.style.width = "100%";
        /* body.style.overflow = "hidden"; */
        //body.style.position = "fixed";
    } 
    /* if(btnMobile.style.display == "block" && active == true) {
        body.style.position = "fixed";
    } */
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
        //header.style.position = "";
        /* body.style.overflowY = "scroll"; */
        body.style.position = "static";
    }
}
//toggle - adicione caso tenha e remova caso não tenha