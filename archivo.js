var buttonEncriptar = document.querySelector(".btn-Encriptar");
var buttonDesencriptar = document.querySelector(".btn-Desencriptar");
var muñeco = document.querySelector(".contenedor-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var buttonCopiar = document.querySelector (".btn-copiar");

buttonEncriptar.onclick= Encriptar;
buttonDesencriptar.onclick= Desencriptar;
buttonCopiar.onclick = copy;

function Encriptar() {
 ocultarAdelante();
 var area= recuperarTexto ();
resultado.textContent = encriptarTexto(recuperarTexto())
}

function Desencriptar(){
ocultarAdelante();
var area = recuperarTexto ();
resultado.textContent = Desencriptartexto(recuperarTexto())
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}
function ocultarAdelante(){
muñeco.classList.add("ocultar");
h3.classList.add("ocultar");
parrafo.classList.add("ocultar");
}

function encriptarTexto (mensaje){
    var texto = mensaje;
    var textofinal ="";
    
    for(var i=0; i < texto.length; i++){
        if (texto [i]=="a"){
            textofinal = textofinal +"ai";
    }
   else if (texto[i] =="e"){
        textofinal =textofinal +"enter";
}
else if (texto[i ]=="i"){
    textofinal= textofinal+"imes";
}
else if (texto[i] =="o"){
    textofinal= textofinal+"ober";
}
else if (texto[i] =="u"){
    textofinal= textofinal+"ufat";
}
else{
    textofinal= textofinal+texto[i];
}
    }
return textofinal;
}

function Desencriptartexto (mensaje){
    var texto = mensaje;
    var textofinal ="";
    
    for(var i=0; i < texto.length;i++){
        if (texto[i] == "a"){
            textofinal = textofinal+"a";
            i=i+1;
    }
   else if (texto[i] =="e"){
        textofinal = textofinal + "e";
        i=i+4;
}
else if (texto[i] =="i"){
    textofinal= textofinal+"i";
    i=i+3;
}
else if (texto[i] =="o"){
    textofinal= textofinal+"o";
    i=i+3;
}
else if (texto[i] =="u"){
    textofinal= textofinal+"u";
    i=i+3;
}
else{
    textofinal = textofinal + texto[i];
}
    }
return textofinal;
}

function copy(){
    var contenido = document.querySelector("#btn-copiar"); 
    mensaje= copy;
    alert("copiado");
    buttonCopiar.addEventListener("click", Function (copy));
    var textresult = document.querySelector(".texto-resultado");
    navigator.clipboard.writeText(textresult.textContent)
    
}


