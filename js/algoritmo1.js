function multiplos3() {
    if(!isNaN(document.getElementById("num1").value) && !isNaN(document.getElementById("num2").value)){
        var a = parseInt(document.getElementById("num1").value);
        var b = parseInt(document.getElementById("num2").value);
        var multiplos = "";

        for (let i = a; i <= b; i++) {
            if (i % 3 == 0) {
                multiplos += `${i} <br>`;
            }
        }

        if(a!=b){
            for (let i = a; i >= b; i--) {
                if (i % 3 == 0) {
                    multiplos += `${i} <br>`;
                }
            }
        }
        document.getElementById("textoResultado").innerHTML = `Resultado: Los múltiplos de 3 entre ${a} y ${b} son: <br> ${multiplos}`;
    } else{
        document.getElementById("textoResultado").innerHTML = `Existe un error en el tipo de dato`;
    }
}