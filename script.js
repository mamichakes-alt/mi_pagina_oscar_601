function mostrarmensaje (){
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "cuida y proteje alos animales";
    mensaje.style.display = "block";

    setTimeout (() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "traslateY(0";
    }, 50);
}