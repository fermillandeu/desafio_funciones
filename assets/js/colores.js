function changeColorToBlack(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('blue').addEventListener('click', changeColorToBlack);
document.getElementById('red').addEventListener('click', changeColorToBlack);
document.getElementById('green').addEventListener('click', changeColorToBlack);
document.getElementById('yellow').addEventListener('click', changeColorToBlack);