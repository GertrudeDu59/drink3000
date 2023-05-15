console.log("test")
var typeDesalt = document.getElementsByClassName("typeDesalterante")
var typeEnerg = document.getElementsByClassName("typeEnergisante")



function selection(clickedElement){
    var button_id = clickedElement.id;
    document.getElementById("p1").innerHTML = button_id;
};



function desalt() {
    console.log(typeDesalt);
    $('.typeDesalterante').removeClass('Disabled');
    $('.typeEnergisante').addClass('Disabled');

    $('.typeEnergisante').addClass('HiddenDesc');
    $('.typeEnergisante').removeClass('HiddenDisp');

    $('.typeDesalterante').addClass('HiddenDisp');
    $('.typeDesalterante').removeClass('HiddenDesc');
}

function energ() {
    console.log(typeDesalt)
    $('.typeEnergisante').removeClass('Disabled');
    $('.typeDesalterante').addClass('Disabled');

    $('.typeDesalterante').addClass('HiddenDesc');
    $('.typeDesalterante').removeClass('HiddenDisp');

    
    $('.typeEnergisante').addClass('HiddenDisp');
    $('.typeEnergisante').removeClass('HiddenDesc');

}


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

