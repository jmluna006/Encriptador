/* Defino las variables */

const TXTaEncriptar = document.querySelector("#TXTEncriptado");
const MNSJEncriptado = document.querySelector("#MNSJEncriptado");

function btnEncriptar() {
    var TXTEncriptado = TXTaEncriptar.value; // Obtiene el valor del Campo de TXTEncriptador
    TXTEncriptado= TXTEncriptado.toLowerCase();
    console.log("Texto A Encriptar:");
    console.log(TXTaEncriptar.value);
    var TXTFinal="";
    for (let i = 0; i < TXTEncriptado.length; i++) {
        if(TXTEncriptado[i] == "a"){
            TXTFinal = TXTFinal + "ai";
        }
        else if(TXTEncriptado[i] == "e"){
            TXTFinal = TXTFinal + "enter";
        }
        else if(TXTEncriptado[i] == "i"){
            TXTFinal = TXTFinal + "imes";
        }
        else if(TXTEncriptado[i] == "o"){
            TXTFinal = TXTFinal + "ober";
        }
        else if(TXTEncriptado[i] == "u"){
            TXTFinal = TXTFinal + "ufat";
        }
        else{
            TXTFinal = TXTFinal + TXTEncriptado[i]
        }
        
    }
    MNSJEncriptado.value = TXTFinal; // Obtiene el valor desde TXTEncriptador
    TXTaEncriptar.value = ""; // Reinicia el valor de la variable a NADA
    MNSJEncriptado.style.backgroundImage = "none" ;
    console.log("Texto Encriptado:");
    console.log(MNSJEncriptado.value);
    return TXTFinal;
    

}

function btnDesencriptar() {
    var TXTDesEncriptado= document.getElementById('MNSJEncriptado').value;
    //console.log("BTN Desencriptar Texto A Desencriptar:");
    console.log(TXTDesEncriptado.length);
    var TXTFinal="";
    for (let i = 0; i < TXTDesEncriptado.length; i++) {
        console.log("Inicio");
        console.log(i);
        console.log(TXTDesEncriptado[i]);

        if(TXTDesEncriptado[i]=="a"){
            TXTFinal=TXTFinal+"a";
            i = i+1;
        }
        else if(TXTDesEncriptado[i] == "e"){
            TXTFinal=TXTFinal + "e";
            i = i+4;
        }
        else if(TXTDesEncriptado[i] == "i"){
            TXTFinal=TXTFinal + "i";
            i = i+3;
        }
        else if(TXTDesEncriptado[i] == "o"){
            TXTFinal=TXTFinal + "o";
            i = i+3;
        }
        else if(TXTDesEncriptado[i] == "u"){
            TXTFinal=TXTFinal + "u";
            i = i+3;
        }
        else{

            TXTFinal=TXTFinal + TXTDesEncriptado[i];
            
        }
        console.log("Final");
        console.log(TXTFinal[i]);
    }
    MNSJEncriptado.value = TXTFinal;
    //console.log(TXTFinal);
    return TXTFinal;    
}

function btnCopiar() {
    const texto = document.getElementById('MNSJEncriptado').value;
    navigator.clipboard.writeText(texto);
    MNSJEncriptado.value = texto;
    console.log("TXT Copiado:");
    console.log(MNSJEncriptado.value);
}

