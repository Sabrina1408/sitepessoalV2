let btnMobile = document.querySelector("#btnMobile");
let btnMobileLiA = document.querySelectorAll(".btn-mobile-li-a");
arrayLiAs = Array.from(btnMobileLiA);
arrayLiAs.forEach(liAs => {
    liAs.addEventListener("click", toggleMenu);
});
btnMobile.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    let nav = document.querySelector("#nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
}
//toggle - adicione caso tenha e remova caso não tenha