// Cola global
let queue = [];

const palabrasAleatorias = [
    "sol", "libro", "café", "nube", "guitarra",
    "ventana", "camino", "sombra", "fuego", "montaña",
    "río", "luz", "jardín", "arena", "puente"
];

function Aleatorias() {
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iEnqueue").value = `Enqueue(${palabrasAleatorias[indice]})`;
}

function CambioTexto() {
    document.getElementById("iEnqueue").value = `Enqueue(${document.getElementById("Elemento").value})`;
    document.getElementById("iFind").value = `Find(${document.getElementById("Elemento").value})`;
}

function Enqueue() {
    const elemento = document.getElementById("Elemento").value;
    if (elemento.trim() !== "") {
        queue.push(elemento);  // Agregar el elemento a la cola
        actualizarTabla();  // Actualizar la tabla con el nuevo estado de la cola
        document.getElementById("mensaje").innerHTML = `Elemento "${elemento}" añadido a la cola.`;

        // Habilitar el botón Front solo si hay elementos en la cola
        document.getElementById("iFront").disabled = false;
    } else {
        document.getElementById("mensaje").innerHTML = "Por favor, ingrese un elemento válido para añadir.";
    }

    Aleatorias();  // Cambiar el valor en el input con una palabra aleatoria
}

function Dequeue() {
    if (queue.length > 0) {
        const elementoEliminado = queue.shift();  // Eliminar el primer elemento
        actualizarTabla();  // Actualizar la tabla con el nuevo estado de la cola
        document.getElementById("mensaje").innerHTML = `Se ha eliminado el elemento: ${elementoEliminado}.`;

        // Si la cola queda vacía, deshabilitar el botón Front
        if (queue.length === 0) {
            document.getElementById("iFront").disabled = true;  // Deshabilitar Front
        }
    } else {
        document.getElementById("mensaje").innerHTML = "La cola está vacía.";
    }
}

function Find() {
    const elemento = document.getElementById("Elemento").value;
    if (queue.includes(elemento)) {
        document.getElementById("mensaje").innerHTML = `Sí se encuentra el elemento: ${elemento}.`;
    } else {
        document.getElementById("mensaje").innerHTML = "No se encuentra el elemento.";
    }
}

function isEmpty() {
    if (queue.length === 0) {
        document.getElementById("mensaje").innerHTML = "La cola está vacía.";
    } else {
        document.getElementById("mensaje").innerHTML = "La cola no está vacía.";
    }
}

function Front() {
    if (queue.length > 0) {
        document.getElementById("mensaje").innerHTML = `El primer elemento en la cola es: ${queue[0]}.`;
    } else {
        document.getElementById("mensaje").innerHTML = "La cola está vacía.";
    }
}

function Clear() {
    queue = [];  // Vaciar la cola
    actualizarTabla();  // Actualizar la tabla con el nuevo estado (vacío)
    document.getElementById("mensaje").innerHTML = "Se han eliminado todos los elementos de la cola.";
    document.getElementById("iFront").disabled = true;  // Deshabilitar Front si la cola está vacía
}

// Actualizar la tabla visualmente
function actualizarTabla() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = '';  // Limpiar la tabla
    queue.forEach((elem, index) => {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.textContent = elem;
        fila.appendChild(celda);
        tabla.appendChild(fila);
    });
}
