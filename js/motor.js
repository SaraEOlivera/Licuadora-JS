let estadoLicuadora = "apagada";

/*vinculo sonido licuadora con js: */

let sonidoLicuadora = document.getElementById("blender-sound");
/*para guardar id en la variable: */
let botonLicuadora = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

/*para ver estado de licuadora y cambiarlo: */ 
function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerSonidos()  
        licuadora.classList.add("active");/*agrega la clase y cambia img*/
    } else {
        estadoLicuadora = "apagada";
        hacerSonidos();
        licuadora.classList.remove("active");/*saca a clase active y cambia img*/
    }
}

/*si el sonido esta pausado, lo reproduce. Si el sonido está activo, reproduce sonido boton, poner en pausa licuadora y resetea tiempo de audio a 0 asi si toco el boton, el sonido arranca desde el inicio. */

function hacerSonidos() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* resetea tiempo reproduccion a 0*/
    }
    
}