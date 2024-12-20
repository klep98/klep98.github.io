var contador = 0;
function Capturar() {
    document.getElementById("posicionDisplay").innerHTML = `Elemento[${contador}]`;

    //Agregamos renglones horizontales
    var renglonIndice = document.getElementById("renglonIndice");
    var indice = renglonIndice.insertCell(-1);
    indice.innerHTML = `[${contador}]`;

    var renglonDato = document.getElementById("renglonDato");
    var dato = renglonDato.insertCell(-1);
    dato.innerHTML = document.getElementById("elementoInput").value;

    //Agregamos columna de forma vertical
    var tabla = document.getElementById("tablaVertical");
    var renglonVertical = tabla.insertRow(-1);
    var celda1 = renglonVertical.insertCell(0).innerHTML = `[${contador}]`;
    var celda2 = renglonVertical.insertCell(1).innerHTML = document.getElementById("elementoInput").value;



    if (contador == 9) {
        document.getElementById("capturarBoton").disabled = true;
        document.getElementById("elementoInput").value = "";
        document.getElementById("elementoInput").disabled = true;
        document.getElementById("generarBoton").disabled = false;
    } else {
        contador++;
        document.getElementById("posicionDisplay").innerHTML = `Elemento[${contador}]`;
        aleatorios();
    }
}

function aleatorios() {
    document.getElementById("elementoInput").value = Math.floor(Math.random() * 1000);
}

function Calcular() {
    var celdas = document.getElementById("renglonDato").children;
    var menor = parseInt(celdas[0].innerHTML);
    var mayor = parseInt(celdas[0].innerHTML);
    var suma = 0;
    var promedio = 0;

    for (let i = 0; i < celdas.length; i++) {
        if (menor > parseInt(celdas[i].innerHTML)) {
            menor = parseInt(celdas[i].innerHTML);
        }
        if (mayor < parseInt(celdas[i].innerHTML)) {
            mayor = parseInt(celdas[i].innerHTML);
        }
        suma += parseInt(celdas[i].innerHTML);
    }
    promedio = suma / celdas.length;
    document.getElementById("menorResultado").innerHTML = `El menor es ${menor}`;
    document.getElementById("mayorResultado").innerHTML = `El mayor es ${mayor}`;
    document.getElementById("sumatoriaResultado").innerHTML = `La suma es ${suma}`;
    document.getElementById("promedioResultado").innerHTML = `El promedio es ${promedio}`;

    //Se copia la tabla horizontal
    document.getElementById("tablaHorizontal2").innerHTML = document.getElementById("tablaHorizontal").innerHTML;
    document.getElementById("tablaHorizontal2").rows[0].id = "renglonIndice2";
    document.getElementById("tablaHorizontal2").rows[1].id = "renglonDato2";
    celdas = document.getElementById("renglonDato2").children;

    //forma ascendente
    for (let i = 0; i < celdas.length; i++) {
        for (let j = 0; j < celdas.length; j++) {
            if (parseInt(celdas[i].innerHTML) < parseInt(celdas[j].innerHTML)) {
                var temporal = celdas[i].innerHTML;
                celdas[i].innerHTML = celdas[j].innerHTML;
                celdas[j].innerHTML = temporal;
            }
        }
    }

    //Ordenamos en descentente
    document.getElementById("tablaHorizontal3").innerHTML = document.getElementById("tablaHorizontal").innerHTML;
    document.getElementById("tablaHorizontal3").rows[0].id = "renglonIndice3";
    document.getElementById("tablaHorizontal3").rows[1].id = "renglonDato3";
    celdas = document.getElementById("renglonDato3").children;

    for (let i = 0; i < celdas.length; i++) {
        for (let j = 0; j < celdas.length; j++) {
            if (parseInt(celdas[i].innerHTML) > parseInt(celdas[j].innerHTML)) {
                var temporal = celdas[i].innerHTML;
                celdas[i].innerHTML = celdas[j].innerHTML;
                celdas[j].innerHTML = temporal;
            }
        }
    }

    //Se copia la tabla vertical


    for (let i = 0; i < celdas.length; i++) {
        //Forma ascendente
        var fila = document.getElementById("tablaVertical2")
        var nuevaFila = fila.insertRow(-1);
        var valor = nuevaFila.insertCell(0).innerHTML = `[${i}]`;

        var valor1 = nuevaFila.insertCell(1);
        valor1.innerHTML = celdas[9 - i].innerHTML;

        //Forma descendente
        fila = document.getElementById("tablaVertical3")
        nuevaFila = fila.insertRow(-1);
        valor = nuevaFila.insertCell(0).innerHTML = `[${i}]`;
        valor1 = nuevaFila.insertCell(1);
        valor1.innerHTML = celdas[i].innerHTML;
    }

    // Calcular la mediana. 
    var mediana = (parseInt(celdas[4].innerHTML) + parseInt(celdas[5].innerHTML)) / 2;
    document.getElementById("medianaResultado").innerHTML = `La mediana es: ${mediana}`;

    // Calcular la moda.
    var valores = document.getElementById("tablHorizontal");
    var frecuencuas = {};
    var moda = null;
    var maximaFrecuencia = 0;


}

function Reiniciar() {
    document.getElementById("capturarBoton").disabled = false;
    document.getElementById("elementoInput").disabled = false;
    document.getElementById("generarBoton").disabled = true;
    
    // Limpiar filas de las tablas horizontales
    document.getElementById("renglonIndice").innerHTML = "";
    document.getElementById("renglonDato").innerHTML = "";
    document.getElementById("renglonIndice2").innerHTML = "";
    document.getElementById("renglonDato2").innerHTML = "";
    document.getElementById("renglonIndice3").innerHTML = "";
    document.getElementById("renglonDato3").innerHTML = "";

    // Limpiar tablas verticales
    document.getElementById("tablaVertical").innerHTML = "";
    document.getElementById("tablaVertical2").innerHTML = "";
    document.getElementById("tablaVertical3").innerHTML = "";

    // Limpiar resultados
    document.getElementById("menorResultado").innerHTML = "";
    document.getElementById("mayorResultado").innerHTML = "";
    document.getElementById("sumatoriaResultado").innerHTML = "";
    document.getElementById("promedioResultado").innerHTML = "";
    document.getElementById("medianaResultado").innerHTML = "";
    document.getElementById("posicionDisplay").innerHTML = "Elemento [0]:";
    
    aleatorios(); // Llama a aleatorios para generar un nuevo número
    contador = 0; // Reinicia el contador
}
