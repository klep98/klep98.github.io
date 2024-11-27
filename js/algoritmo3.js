function cubo() {
    var naturales = parseInt(document.getElementById("nat").value);
    var resultado = "Resultado: <br>";
    if(!isNaN(document.getElementById("nat").value) && naturales > 1){
        for (let i = 2; i <= naturales; i++) {
            if (i % 2 == 0) {
                resultado += `${i} al cubo es: ${i*i*i} <br>`
            }
            
            
        }
        document.getElementById("resultado").innerHTML = resultado;
    }else{
        document.getElementById("resultado").innerHTML = `Existe un error en el tipo de dato, el número es negativo y/o tiene que ser mayor a 1`;
    }
}