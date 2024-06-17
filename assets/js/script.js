// Este el el ejercicio 3 que hay que modificar

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     } const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


const ele = document.getElementById("ele1");

function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

ele.addEventListener("click", () => {
    pintar(ele, 'yellow'); 
});
