function calculatePi() {
    const iterations = parseInt(document.getElementById('iterations').value);
    const resultElement = document.getElementById('result');

    // Manejo de errores
    if (isNaN(iterations)) {
        resultElement.textContent = 'Por favor ingrese un número válido.';
        return;
    }

    if (iterations < 0) {
        resultElement.textContent = 'Error: El número de iteraciones no puede ser negativo.';
        return;
    }

    // Cálculo de π usando la serie de Leibniz
    let pi = 0;
    for (let i = 0; i < iterations; i++) {
        const term = (i % 2 === 0 ? 1 : -1) / (2 * i + 1);
        pi += term;
    }
    pi *= 4;

    resultElement.textContent = `π ≈ ${pi.toFixed(5)}`;
}