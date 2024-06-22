document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones
    const buttons = document.querySelectorAll('.toggleButton');

    // Añade un evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Encuentra el contenido asociado al botón
            const content = this.previousElementSibling;

            // Alterna la visibilidad del contenido
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "flex";
                this.textContent = "Mostrar menos";
            } else {
                content.style.display = "none";
                this.textContent = "Mostras más";
            }
        });
    });
});
