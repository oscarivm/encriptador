const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");

//console.log(campo_Texto,campo_Mensaje);

const matriz_vocales = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
    const texto = encriptar(campoTexto.value);
    //console.log(texto);
    campoMensaje.value = texto; 
}

function btnDescriptar(){
    const texto = desencriptar(campoTexto.value);
    //console.log(texto);
    campoMensaje.value = texto; 
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_vocales.length; i++){
        if(fraseEncriptada.includes(matriz_vocales[i][0])){
            fraseEncriptada =fraseEncriptada.replaceAll(
                matriz_vocales[i][0],
                matriz_vocales[i][1]
            ) 
        }        
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada){
    for(let i = 0; i < matriz_vocales.length; i++){
        if(fraseEncriptada.includes(matriz_vocales[i][1])){
            fraseEncriptada =fraseEncriptada.replaceAll(
                matriz_vocales[i][1],
                matriz_vocales[i][0]
            ) 
        }        
    }
    return fraseEncriptada;
}

