const palabrasAleatorias = [
    "sol", "libro", "café", "nube", "guitarra", 
    "ventana", "camino", "sombra", "fuego", "montaña", 
    "río", "luz", "jardín", "arena", "puente"
];

// Función que asigna un valor aleatorio al campo de entrada
function Aleatorias() {
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iPush").value = `Push(${palabrasAleatorias[indice]})`;
    document.getElementById("iFind").value = `Find(${palabrasAleatorias[indice]})`;
}

// Función que actualiza el texto del botón Push y Find
function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("iPush").value = `Push(${texto})`;
    document.getElementById("iFind").value = `Find(${texto})`; // Corregido
}

// Método Push para agregar un elemento a la pila
function Push() {
    // Validar que el input no esté vacío
    if (document.getElementById("Elemento").value.trim() !== "") {
        document.getElementById("mensaje").innerHTML = "";

        var renglon = document.createElement("tr");
        var celda = document.createElement("td");
        celda.textContent = document.getElementById("Elemento").value;
        renglon.appendChild(celda);
        var rt = document.getElementById("tabla");

        // Agregar "tope->" como texto simple
        document.getElementById("topLabel").textContent = "tope →";

        // Insertar la nueva palabra en la tabla
        rt.insertBefore(renglon, rt.children[0]);
    } else {
        document.getElementById("mensaje").innerHTML = "No se aceptan cadenas vacías.";
    }
}

// Método Pop para eliminar el elemento del tope de la pila
function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `Se eliminó del tope ${rt.firstChild.textContent}`;
        rt.removeChild(rt.firstChild);
        // Actualizar el texto del tope
        if (rt.hasChildNodes()) {
            document.getElementById("topLabel").textContent = "tope →";
        } else {
            document.getElementById("topLabel").textContent = ""; // Si no hay elementos, vaciar
        }
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos para hacer el Pop.";
    }
}

// Método Peek para ver el elemento en el tope de la pila
function Peek() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `En el tope de la pila se encuentra ${rt.firstChild.textContent}`;
        document.getElementById("topLabel").textContent = "tope →"; // Mantener la etiqueta de tope
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila.";
    }
}

// Método Clear para vaciar la pila
function Clear() {
    document.getElementById("tabla").textContent = ""; // Limpiar la tabla
    document.getElementById("topLabel").textContent = ""; // Limpiar la etiqueta de tope
    document.getElementById("mensaje").innerHTML = "Se hizo clear en la pila"; // Mensaje de confirmación
}

// Método Find para buscar un elemento en la pila
function Find() {
    var rt = document.getElementById("tabla");
    var control = false; // Corregido a false
    if (rt.hasChildNodes()) {
        for (let i = 0; i < rt.childNodes.length; i++) {
            let nodo = rt.childNodes[i].childNodes[0].textContent; // Acceder al contenido de la celda
            if (nodo === document.getElementById("Elemento").value) {
                document.getElementById("mensaje").innerHTML = "Sí se encuentra.";
                control = true;
                break;
            }
        }
        if (!control) {
            document.getElementById("mensaje").innerHTML = "No se encuentra.";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila.";
    }
}

// Método isEmpty para verificar si la pila está vacía
function isEmpty() {
    var rt = document.getElementById("tabla");
    if (!rt.hasChildNodes()) { // Cambiar la condición
        document.getElementById("mensaje").innerHTML = "true"; // Pila vacía
    } else {
        document.getElementById("mensaje").innerHTML = "false"; // Pila no vacía
    }
}
