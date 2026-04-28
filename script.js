function mostrarmensaje (){
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "cuida y proteje alos animales";
    mensaje.style.display = "block";

    setTimeout (() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "traslateY(0";
    }, 50);
}
function mostrarmensaje2 (){
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "hola soy oscar";
    mensaje.style.display = "block";

    setTimeout (() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "traslateY(0";
    }, 50);
}