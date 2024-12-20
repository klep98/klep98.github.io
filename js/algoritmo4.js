function fibonacci() {

    // Obtiene el límite introducido por el usuario.
    var limite = parseInt(document.getElementById("limite").value);

    // Inicializa las dos primeras variables de la secuencia de Fibonacci.
    var num1 = 0;
    var num2 = 1;

    // Imprime los dos primeros numeros de la secuencia.
    console.log("0 1")

    // Variable para almacenar la secuencia de Fibonacci.
    var resultado = "0 1 ";

    while (num1 + num2 <= limite) {
        var i = num1 + num2;
        resultado += i + " ";
        num1 = num2;
        num2 = i;
    }

    // Muestra el resultado en el elemento con id "resultado".
    document.getElementById("resultado").innerText = resultado;
}