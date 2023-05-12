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

