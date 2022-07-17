function presentacion(){
    let nombre="Programacion"+" "+"Facil.";
    let saludo="Les doy la bienvenida a ";
    let extra=" El mejor curso del mundo.";

    let fraseCompleta=saludo+nombre+extra;

    console.log(fraseCompleta);
    alert(fraseCompleta);
}

function descripcion(){
    let frase="Java script "+"es un lenguaje"+" escencial para crear"+" sitios webs poderosos.";
    console.log(frase);
    alert(frase);
}

function ordenar(){
    let numeroString1="10";
    let numeroString2="20";
    let numeroString3="30";

    let concatenarNumeros="Primer numero: "+numeroString1+"."+"\n Segundo numero: "+numeroString2+"."+"\n Tercer numero: "+numeroString3+".";

    console.log(concatenarNumeros);
    alert(concatenarNumeros);
}

function datos(){
    var edad=prompt("Cual es tu edad?");
    var nombreDos=prompt("Cual es tu nombre?")

    console.warn(nombreDos);
    console.warn(edad);
    alert("Sos "+nombreDos+" y tenes "+edad);
}

function mayor(){
    let edad;
    let sexo;

    sexo=prompt("Elige tu sexo con M o F: ");
    if(sexo=="M"){
        edad=prompt("Que edad tienes?");
        if(edad>=18){
            alert("Eres mayor de edad, puedes pasar.")
        } else {
            alert("No eres mayor de edad.");
        }
    }

    if(sexo=="F"){
        edad=prompt("Que edad tienes?");
        if(edad>=20){
            alert("Eres mayor de edad, puedes pasar.");
        } else {
            alert("No eres mayor de edad.");
        }
    }
}