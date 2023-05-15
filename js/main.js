console.log("test")
var typeDesalt = document.getElementsByClassName("typeDesalterante")
var typeEnerg = document.getElementsByClassName("typeEnergisante")



function selection(clickedElement){
    var button_id = clickedElement.id;
    console.log("Im button "+ button_id)
    document.getElementById("p1").innerHTML = button_id;
};



function desalt() {
    console.log(typeDesalt);
    $('.typeDesalterante').removeClass('Disabled')
    $('.typeEnergisante').addClass('Disabled')
}

function energ() {
    console.log(typeDesalt)
    $('.typeEnergisante').removeClass('Disabled')
    $('.typeDesalterante').addClass('Disabled')}


const manav = document.querySelector('#manav');
manav.classList.add('hidden');
const mainNav = document.querySelector('#mainNav');
mainNav.classList.add('hidden');

window.addEventListener('scroll', () => {
    if (window.scrollY == 0){
        mainNav.classList.remove('hidden');
        manav.classList.add('hidden');
    }if(window.scrollY >= 200){
        manav.classList.remove('hidden');
        mainNav.classList.add('hidden');
    }
});