let tituloMensaje = document.getElementById('titulo-mensaje');
let parrafo = document.getElementById('parrafo');
let muñeco = document.getElementById('muñeco');
let regex = /^[a-zñ\s]+$/;
function encriptar() {
    let texto = document.getElementById('texto').value;
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    if (texto.length != 0 && regex.test(texto)) {
        document.getElementById('texto').value = textoCifrado;
        muñeco.src = "./img/encriptado.jpg";
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
    } else {
        alert("El texto debe estar en minusculas y sin acentos");
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Nigun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}
function desencriptar() {
    let texto = document.getElementById('texto').value;
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    if (texto.length != 0 && regex.test(texto)) {
        document.getElementById('texto').value = textoCifrado;
        muñeco.src = "./img/desencriptado.jpg";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else {
        alert("El texto debe estar en minusculas y sin acentos");
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Nigun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}