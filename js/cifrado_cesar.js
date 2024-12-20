// Función que genera las opciones de clave (1-25) en cada selector
document.addEventListener("DOMContentLoaded", function() {
    optionKey();
});

function optionKey() {
    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        // Solo agregar las opciones si el select está vacío
        if (selects[i].childElementCount === 0) {
            for (let j = 1; j <= 25; j++) {
                var option = document.createElement("option");
                option.value = j;
                option.textContent = j;
                selects[i].appendChild(option);
            }
        }
    }
}

// Ejemplo 1 de mensaje y claves
function example1() {
    console.log("ejemplo1");
    document.getElementById("originalMessage").value =
        `Lástima que ya se acabó la clase, yo quiero desayunar taquitos y no puedo :c`;
    document.getElementById("key1").value = 16;
    document.getElementById("key2").value = 12;
    document.getElementById("key3").value = 21;
    document.getElementById("key4").value = 6;
    document.getElementById("key5").value = 2;
    document.getElementById("key6").value = 1;
}

// Ejemplo 2 de mensaje
function example2() {
    document.getElementById("originalMessage").value =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus nisl, eleifend nec lorem eget, posuere maximus nisi. Vivamus vel semper sapien. In eu ante tempus, bibendum odio sed, sagittis libero. Etiam semper congue consectetur. Ut fermentum iaculis ante, ultrices tempor odio consequat vitae. Proin fermentum urna cursus est sodales sollicitudin. Sed vehicula nisl id velit condimentum fringilla. Sed ultricies risus justo, at egestas elit feugiat quis. Duis tincidunt felis nec neque rutrum rutrum. Aliquam non dolor massa. Nam efficitur commodo eros id ullamcorper. Vivamus hendrerit sit amet ante sed auctor. Donec auctor vitae est vel gravida. Quisque nisl erat, hendrerit eu velit sed, semper condimentum purus. Donec eu sodales lorem. Proin ullamcorper, elit id volutpat consectetur, quam felis sodales velit, sit amet convallis mauris nunc ac metus.`.toUpperCase();
}

// Limpiar campos
function clearTextArea() {
    console.log("Limpiando campos...");
// Limpiar los mensajes
    document.getElementById("originalMessage").value = " ";
    document.getElementById("encryptedMessage").value = " ";  // Limpiar también el mensaje encriptado

// Restablecer claves a su valor por defecto (1)
    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].value = 1;  // Restablecer todas las claves a 1
    }
}


// Restringir entrada de caracteres no válidos
function allows(event) {
    var keycode = event.keyCode || event.which;
    var typeTool = String.fromCharCode(keycode);
    if (!/^[A-Z]$/.test(typeTool) && keycode != 13 && keycode != 32 && keycode != 8) {
        event.preventDefault();
    }
}

// Convertir el texto a mayúsculas
function capital(textArea) {
    textArea.value = textArea.value.toUpperCase();
}

// Función de encriptado con la clave
function encript() {
    var message = document.getElementById("originalMessage").value;
    var output = "";
    var keys = [
        parseInt(document.getElementById("key1").value),
        parseInt(document.getElementById("key2").value),
        parseInt(document.getElementById("key3").value),
        parseInt(document.getElementById("key4").value),
        parseInt(document.getElementById("key5").value),
        parseInt(document.getElementById("key6").value)
    ];

    for (let i = 0; i < message.length; i++) {
        var letter = message.charCodeAt(i);
        var keyIndex = i % keys.length;  // Ciclar entre las claves
        var displacement = keys[keyIndex];  // Obtener la clave correspondiente

        if (letter >= 65 && letter <= 90) {  // A-Z
            var newLetter = letter + displacement;
            if (newLetter > 90) {
                newLetter -= 26;
            } else if (newLetter < 65) {
                newLetter += 26;
            }
            output += String.fromCharCode(newLetter);
        } else {
            output += message[i];  // Conservar otros caracteres sin cambio
        }
    }

    document.getElementById("encryptedMessage").value = output.trim();
}

// Función para guardar la clave en un archivo de texto
function saveKey() {
    var archive = document.createElement("a");
    var content = document.getElementById("key1").value + "," + document.getElementById("key2").value + "," +
        document.getElementById("key3").value + "," + document.getElementById("key4").value + "," +
        document.getElementById("key5").value + "," + document.getElementById("key6").value;
    archive.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    archive.setAttribute("download", "Key.txt");
    archive.style.display = "none";
    document.body.appendChild(archive);
    archive.click();
    document.body.removeChild(archive);

    alert("Clave guardada correctamente.");
}

// Función para guardar el mensaje encriptado
function saveMessage() {
    if (document.getElementById("encryptedMessage").value.trim() != "") {
        var archive = document.createElement("a");
        var content = document.getElementById("encryptedMessage").value;
        archive.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
        archive.setAttribute("download", "EncriptedMessage.txt");
        archive.style.display = "none";
        document.body.appendChild(archive);
        archive.click();
        document.body.removeChild(archive);

        alert("Mensaje encriptado guardado correctamente.");
    } else {
        alert("No hay mensaje para guardar.");
    }
}