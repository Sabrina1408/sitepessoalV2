const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeftt = control.classList.contains('arrow-left');
        if(isLeftt){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItems -1;
        }
        items.forEach(item => item.classList.remove('current-item'));
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
        items[currentItem].classList.add('current-item')
        console.log('Control clicked', isLeftt, currentItem);
    })
});