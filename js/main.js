console.log("test")

function selection(clickedElement){
    var button_id = clickedElement.id;
    console.log("Im button "+ button_id)
    document.getElementById("p1").innerHTML = button_id;
};



function desalt() {
    var typeDesalt = document.getElementsByClassName("typeDesalterante")
    console.log(typeDesalt);
    $('.typeDesalterante').removeClass('typeSelect')
    $('.typeEnergisante').addClass('typeSelect')
    
    var path1 = typeEnerg.getElementsByClassName('encartRecetteBoutons');
    var path2 = path1.getElementsByClassName('row');
    var path3 = path2.getElementsByClassName('colSel');
    var btndisable = path3.getElementsByClassName(``)


}

function energ() {
    var typeDesalt = document.getElementsByClassName("typeEnergisante")
    console.log(typeDesalt)
    $('.typeEnergisante').removeClass('typeSelect')
    $('.typeDesalterante').addClass('typeSelect')}


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