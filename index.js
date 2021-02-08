const pnls = document.querySelectorAll('.panels');

function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
pnls.forEach(panels => panels.addEventListener('click',toggleOpen));
pnls.forEach(panels => panels.addEventListener('transitionend',toggleActive));