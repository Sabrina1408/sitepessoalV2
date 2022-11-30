let btnMobile = document.querySelector("#btnMobile");
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
//toggle - adcione caso tenha e remova caso não tenha