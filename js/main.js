var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elSpanMan = document.querySelector(".span__man");
var elSpanBicycle = document.querySelector(".span__velosiped");
var elSpanCar = document.querySelector(".span__car");
var elSpanPilot = document.querySelector(".span__pilot");






elForm.addEventListener( "submit", function(event){
event.preventDefault();

var elInputVal = elInput.value;



function man(){
    return elInputVal / 3.6;
}
function bicycle(){
 return elInputVal / 20.1;
}

function car(){
    return elInputVal / 70;
}

function pilot(){
    return elInputVal/800;
}

elSpanMan.textContent =(man().toFixed(2));
elSpanBicycle.textContent = (bicycle().toFixed(2));
elSpanCar.textContent = (car().toFixed(2));
elSpanPilot.textContent =(pilot().toFixed(2));

});












