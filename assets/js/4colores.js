document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "red"
    } else if (event.key === 's') {
        color = "green"
    } else if (event.key === 'd') {
        color = "yellow"
    } else {
        color = "white"
    }
});

document.addEventListener('click', function (event) {
    let div = document.querySelector("#" + event.target.id).style.backgroundColor = color;
});

window.onload = function () {
    document.onkeypress = mostrarInformacionCaracter;
}

function mostrarInformacionCaracter(evObject) {
    var msg = '';
    var elCaracter = String.fromCharCode(evObject.which);
    // var mayuscula = text.toUppercase(elCaracter);
    msg = "Tecla presionada:  " + elCaracter;
    control.innerHTML = msg;
}