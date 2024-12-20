function Generar() {
    //Esta instruccion borra las columnas y renglones de la tabla
    document.getElementById("cuadrado").innerHTML = "";

    //Agregamos renglones y columnas
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var celda = "", nuevaFila = "", r = 0, c = 0;

    for (r = 0; r < lado; r++) {
        nuevaFila = tabla.insertRow(-1);
        celda = nuevaFila.insertCell(0);
        celda.innerHTML = "";
        celda.style.border = "none";
        for (c = 0; c < lado; c++) {
            celda = nuevaFila.insertCell(-1);
            var entrada = document.createElement("input");
            entrada.setAttribute("type", "number");
            entrada.setAttribute("required", "required");
            entrada.setAttribute("value", aleatorios());
            entrada.setAttribute("style", "width:50px;");
            celda.appendChild(entrada);

        }
        var celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";
    }

    var nuevaFila = tabla.insertRow(-1);
    for (c = 0; c < lado + 2; c++) {
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";

    }
    tabla.rows[lado].cells[c - 1].innerHTML = "diagonalder";
    tabla.rows[lado].cells[0].innerHTML = "diagonalizq";
    Calcular();
}

function aleatorios() {
    return Math.floor(Math.random() * 100);
}

function ejemploMagico() {
    var tabla = document.getElementById("cuadrado");
    for (let r = 0; r < document.getElementById("lados").value; r++) {
        for (let c = 1; c <= document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector("input").value = document.getElementById("lados").value;

        }

    }
    document.getElementById("verificar").innerHTML = "¡Es un cuadrado mágico!";
    document.getElementById("verificar").style = "color: rgb(252, 188, 29)";
    Calcular();
}

function ejemploCuadrado() {
    var tabla = document.getElementById("cuadrado");
    var r = 0, c = 0
    for (r = 0; r < document.getElementById("lados").value; r++) {
        for (c = 1; c <= document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector("input").value = aleatorios();

        }

    }
    tabla.rows[r - 1].cells[c - 1].querySelector("input").value = -1;

    document.getElementById("verificar").innerHTML = "NO es un cuadrado mágico";
    document.getElementById("verificar").style = "color: red";
    Calcular();
}

function Calcular() {
    var tabla = document.getElementById("cuadrado");
    var lado = tabla.rows.length;
    var r = 0, c = 0;

    // Suma de filas.
    for (r = 0; r < lado - 1; r++) {
        var sumaFila = 0;
        for (c = 1; c < lado; c++) {
            sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[r].cells[lado].innerHTML = sumaFila;
    }

    // Suma de columnas.
    for (c = 1; c < lado; c++) {
        var sumaColumna = 0;
        for (r = 0; r < lado - 1; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[lado - 1].cells[c].innerHTML = sumaColumna;
    }

    // Suma de la diagonal1.
    var sumaDiagonal1 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal1 += parseInt(tabla.rows[r].cells[r + 1].querySelector('input').value);
    }
    tabla.rows[lado - 1].cells[lado].innerHTML = sumaDiagonal1;

    // Suma de la diagonal2.
    var sumaDiagonal2 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal2 += parseInt(tabla.rows[r].cells[lado - 1 - r].querySelector('input').value);
    }
    tabla.rows[lado - 1].cells[0].innerHTML = sumaDiagonal2;

    CalcularValidar();
}

function CalcularValidar() {
    var tabla = document.getElementById("cuadrado");
    var lado = tabla.rows.length;
    var r = 0, c = 0;

    var sumaObjetivo = 0; // Esta será la suma objetivo para comparar todas las sumas.
    for (c = 1; c < lado; c++) {
        sumaObjetivo += parseInt(tabla.rows[0].cells[c].querySelector('input').value);
    }

    // Suma de filas.
    for (r = 0; r < lado - 1; r++) {
        var sumaFila = 0;
        for (c = 1; c < lado; c++) {
            sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        if (sumaFila !== sumaObjetivo) {
            mostrarResultado(false);
            return;
        }
    }

    // Suma de columnas.
    for (c = 1; c < lado; c++) {
        var sumaColumna = 0;
        for (r = 0; r < lado - 1; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        if (sumaColumna !== sumaObjetivo) {
            mostrarResultado(false);
            return;
        }
    }

    // Suma de la diagonal1.
    var sumaDiagonal1 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal1 += parseInt(tabla.rows[r].cells[r + 1].querySelector('input').value);
    }
    if (sumaDiagonal1 !== sumaObjetivo) {
        mostrarResultado(false);
        return;
    }
    

    // Suma de la diagonal2.
    var sumaDiagonal2 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal2 += parseInt(tabla.rows[r].cells[lado - 1 - r].querySelector('input').value);
    }
    if (sumaDiagonal2 !== sumaObjetivo) {
        mostrarResultado(false);
        return;
    }
}

function mostrarResultado(esMagico) {
    var mensaje = document.getElementById("verificar");
    if (esMagico) {
        mensaje.innerHTML = "¡Es un cuadrado mágico!";
        mensaje.style.color = rgb(252, 188, 29);
    } else {
        mensaje.innerHTML = "No es un cuadrado mágico.";
        mensaje.style.color = "red";
    }
}