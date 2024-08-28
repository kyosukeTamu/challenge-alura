var botonEncriptar = document.querySelector(".contenido_entrada_botones_encriptar");
var botonDesncriptar = document.querySelector(".contenido_entrada_botones_desencriptar");
var munieco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenido_salida_parrafo");
var resultado = document.querySelector(".salida-texto");
var botonCopiar = document.querySelector(".btn-copiar");




botonEncriptar.addEventListener("click", encriptar);
botonDesncriptar.addEventListener("click", desencriptar);




function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
    
}
function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}
function recuperarTexto() {
    var cajatexto = document.querySelector(".contenido_entrada_textarea")
    return cajatexto.value
}
function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        } 
        else if (texto[i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "ufat"
        } else {
            textofinal = textofinal + texto[i]
        }

    }
    return textofinal;
}
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "a"
            i = i+1;
        } 
        else if (texto[i] == "e") {
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "o"
            i = i+3
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "u"
            i = i+3
        } else {
            textofinal = textofinal + texto[i]
        }

    }
    return textofinal;
}

botonCopiar.addEventListener("click", copiar)
function copiar() {
    var contenido = document.querySelector(".salida-texto").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
}

