var i = 0;

        function pasoAPaso() {
            var expresion = document.getElementById("exp").value.split(" ");
            if (i < expresion.length) {
                procesarOperacion(expresion[i]);
                i++;
            }

            if (i == expresion.length) {
                finalizaEvaluacion();
            }
        }

        function procesarOperacion(operador) {
            if (Number.isInteger(Number(operador))) {
                document.getElementById("textPaso").innerHTML +=
                    `Paso: El ${operador} es un número, va al tope de la pila. <br>`;
                Push(operador);
            } else if (["*", "+", "-", "/"].includes(operador)) {
                var operando1 = Pop();
                var operando2 = Pop();
                var resultado = realizarOperacion(operando2, operando1, operador);
                Push(resultado);
                document.getElementById("textPaso").innerHTML +=
                    `Paso: ${operando2} ${operador} ${operando1} = ${resultado} <br>`;
            } else {
                document.getElementById("textPaso").innerHTML +=
                    `Paso: ${operador} no es un elemento válido en una expresión postfija. <br>`;
                document.getElementById("botonEvaluar").disabled = true;
                document.getElementById("botonPasoAPaso").disabled = true;
                document.getElementById("exp").disabled = true;
            }
        }

        function realizarOperacion(operando2, operando1, operador) {
            operando1 = Number(operando1);
            operando2 = Number(operando2);

            switch (operador) {
                case '*':
                    return operando2 * operando1;
                case '+':
                    return operando2 + operando1;
                case '-':
                    return operando2 - operando1;
                case '/':
                    return operando2 / operando1;
                default:
                    return 0;
            }
        }

        function Reiniciar() {
            document.getElementById("botonEvaluar").disabled = false;
            document.getElementById("botonPasoAPaso").disabled = false;
            document.getElementById("exp").disabled = false;
            document.getElementById("exp").value = "3 4 * 2 5 + - 4 * 2 /";
            i = 0;
            document.getElementById("tabla").textContent = "";
            document.getElementById("textPaso").innerHTML = "Pasos: <br>";
            document.getElementById("textResultado").innerHTML = "Resultado: ";
        }

        function Push(operando) {
            var renglon = document.createElement("tr");
            var celda1 = document.createElement("td");
            celda1.textContent = operando;
            renglon.appendChild(celda1);
            celda1.style.border = "1px solid white";
            var rt = document.getElementById("tabla");
            rt.insertBefore(renglon, rt.children[0]);
        }

        function Pop() {
            var rt = document.getElementById("tabla");
            if (rt.hasChildNodes()) {
                var regresar = rt.firstChild.textContent;
                rt.removeChild(rt.firstChild);
                return regresar;
            } else {
                document.getElementById("textResultado").innerHTML = `Error en la expresión postfija <br>`;
                document.getElementById("botonEvaluar").disabled = true;
                document.getElementById("botonPasoAPaso").disabled = true;
                document.getElementById("exp").disabled = true;
                return null;
            }
        }

        function finalizaEvaluacion() {
            document.getElementById("botonEvaluar").disabled = true;
            document.getElementById("botonPasoAPaso").disabled = true;
            document.getElementById("exp").disabled = true;
            var rt = document.getElementById("tabla");
            if (rt.hasChildNodes()) {
                if (rt.childNodes.length == 1) {
                    document.getElementById("textResultado").innerHTML = `Resultado: ${rt.firstChild.textContent}`;
                } else {
                    document.getElementById("textResultado").innerHTML = `Resultado: Hay un error en la expresión.`;
                }
            }
        }

        function Evaluar() {
            var expresion = document.getElementById("exp").value.split(" ");
            i = 0;

            // Reiniciar la pila antes de evaluar
            document.getElementById("tabla").textContent = "";
            document.getElementById("textPaso").innerHTML = "Pasos: <br>";

            while (i < expresion.length) {
                procesarOperacion(expresion[i]);
                i++;
            }

            finalizaEvaluacion();
        }