var control = true;
var contador = 0;

function Chturn(boton) {
    boton.disabled = true;

    boton.value = control ? "O" : " ✕";

    document.getElementById("turno").innerHTML = control ? "Turno ✕" : "Turno O";

    control = !control;

    Verificar();
}

function Verificar() {
    if (++contador == 9) {
        document.getElementById("turno").innerHTML = `Empate`;
        return; // Termina la función si es un empate
    }

    var botones = document.querySelectorAll("input[type=button]");

    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(1)::after
        {
            content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
            position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
            top: 48%; /* Es a partir de donde se empieza a dibujar la línea sin tomar en cuenta el grososr. */ 
            left: 0%; /* Es el porcentaje a partir del cual se dibujarpa la línea tomando en cuenta lo que miden 3 casillas por la izquierda.  */
            right: 0%; /* Es el porcentaje que dejará sin dibujar desde la derecha,  */
            height: 10px; /* Establece el grosor de la línea. */
            background-color:  #2c8cbc ; /* Color de la línea. */
            z-index: 1; /* Estable ce la línea por encima de los objetos. */
            pointer-events: none; /* Para que la línea no interfiera con los botones. */
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[3].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(2)::after
    {            
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 48%; /* Es a partir de donde se empieza a dibujar la línea sin tomar en cuenta el grososr. */ 
        left: 0%; /* Es el porcentaje a partir del cual se dibujarpa la línea tomando en cuenta lo que miden 3 casillas por la izquierda.  */            right: 0%; /* Es el porcentaje que dejará sin dibujar desde la derecha,  */
        height: 10px; /* Establece el grosor de la línea. */                background-color:  #2c8cbc ; /* Color de la línea. */
        z-index: 1; /* Estable ce la línea por encima de los objetos. */
        pointer-events: none; /* Para que la línea no interfiera con los botones. */
    }`;
        document.head.appendChild(Style);
    }
    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[6].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(3)::after
    {
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 48%; /* Es a partir de donde se empieza a dibujar la línea sin tomar en cuenta el grososr. */ 
        left: 0%; /* Es el porcentaje a partir del cual se dibujarpa la línea tomando en cuenta lo que miden 3 casillas por la izquierda.  */            right: 0%; /* Es el porcentaje que dejará sin dibujar desde la derecha,  */
        height: 10px; /* Establece el grosor de la línea. */                background-color:  #2c8cbc ; /* Color de la línea. */
        z-index: 1; /* Estable ce la línea por encima de los objetos. */
        pointer-events: none; /* Para que la línea no interfiera con los botones. */
    }`;
        document.head.appendChild(Style);
    }
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(1)::after
    {
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 0px;
        bottom: 0px;
        left: 48%;
        width: 10px;
        background-color: #2c8cbc;
        z-index: 1;
        pointer-events: none;
    }`;
        document.head.appendChild(Style);
    }
    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(2)::after
    {
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 0px;
        bottom: 0px;
        left: 48%;
        width: 10px;
        background-color: #2c8cbc;
        z-index: 1;
        pointer-events: none;
    }`;
        document.head.appendChild(Style);
    }
    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(3)::after
        {
            content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
            position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
            top: 0px;
            bottom: 0px;
            left: 48%;
            width: 10px;
            background-color: #2c8cbc;            
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `table::before
    {
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 0;
        left: 0;
        width: calc(100% * 1.414);
        height: calc(100% * 1.414);
        border-top: 5px solid #2c8cbc; 
        transform: rotate(45deg);
        transform-origin: top left;
        z-index: 1;
        pointer-events: none;
    }`;
        document.head.appendChild(Style);
    }
    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `table::after
    {
        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo. */
        position: absolute; /* Establece que es lo que se tomará en cuenta a la hora de dibujar la línea. */
        top: 100%;
        left: 0;
        width: calc(100% * 1.414);
        height: calc(100% * 1.414);
        border-top: 5px solid #2c8cbc; 
        transform: rotate(-45deg);
        transform-origin: top left;
        z-index: 1;
        pointer-events: none;
    }`;
        document.head.appendChild(Style);
    }
}

function Dall()
{
    var botones = document.querySelectorAll("input[type=button]");
    for(let i = 0; i < botones.length; i++) {
        botones[i].disabled=true;
    }
}