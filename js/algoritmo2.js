function multiplos3() {
    if(!isNaN(document.getElementById("num1").value) && !isNaN(document.getElementById("num2").value)){
        var a = parseInt(document.getElementById("num1").value);
        var b = parseInt(document.getElementById("num2").value);
        var multiplos = 0;

        for (let i = a; i <= b; i++) {
            if (i % 3 == 0) {
                multiplos += 1;
            }
        }

        if(a!=b){
            for (let i = a; i >= b; i--) {
                if (i % 3 == 0) {
                    multiplos += 1;
                }
            }
        }
        document.getElementById("textoResultado").innerHTML = `Resultado: La cantidad de múltiplos de ${a} y ${b} son: <br> ${multiplos}`;
    } else{
        document.getElementById("textoResultado").innerHTML = `Existe un error en el tipo de dato`;
    }
}