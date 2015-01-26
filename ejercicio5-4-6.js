function changer (id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}
function sumar(tagsuma, tagresultado){  
    elementos_suma = document.getElementById(tagsuma);
    elementos = elementos_suma.innerHTML.split("+", 2);
    changer(tagresultado, (parseInt(elementos[0])+parseInt(elementos[1])));
}
