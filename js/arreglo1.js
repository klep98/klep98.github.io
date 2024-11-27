var elemento = 0;
function Capturar() {
    //Agregamos elementos de forma horizontal
    var row = document.getElementById("renglon1");
    var valor = row.insertCell(-1);
    valor.innerHTML = `[${elemento}]`
    //Asignamos el valor al elemento
    var row2 = document.getElementById("renglon2");
    var valor2 = row2.insertCell(-1);
    valor2.innerHTML = document.getElementById("dato").value;

    //Agregamos los elementos de forma vertical
    var columna = document.getElementById("tablaVertical");
    var renglonVertical = columna.insertRow(-1);
    var valorVertical = renglonVertical.insertCell(0);
    var valorVer2 = renglonVertical.insertCell(0);
    valorVer2.innerHTML = `[${elemento}]`
    valorVertical.innerHTML = document.getElementById("dato").value;
    document.getElementById("dato").focus();
    document.getElementById("dato").value = Math.floor(Math.random()*1000);
    console.log(document.getElementById("dato").value);
    ++elemento;
    if (elemento > 9) {
        document.getElementById("dato").disabled = true;
        document.getElementById("agarrar").disabled = true;
    }

}
function Reiniciar() {
    elemento = 0;
    valor = 0;
    valor2 = 0;
    valorVertical = 0;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;
    document.getElementById("dato").disabled = false;
    document.getElementById("agarrar").disabled = false;
    document.getElementById("renglon1").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("tablaVertical").innerHTML = "";
}