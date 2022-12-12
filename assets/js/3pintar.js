ele = document.getElementById("ele1").style.backgroundColor = "green";
color = "yellow";

function pintar() {
    ele.style.backgroundColor = color;
}
ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);