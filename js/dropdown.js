// Obtener los elementos
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Agregar el evento de clic al botón para mostrar u ocultar el menú
dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

// Opcional: Cerrar el menú si se hace clic fuera del mismo
document.addEventListener('click', function(e) {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});
