// Esperamos a que el usuario haga clic en el botón de ingresar
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Esto evita que la página se recargue

    // Obtenemos los valores que el usuario escribió
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const resultado = document.getElementById('resultado');

    // Mostramos un mensaje de bienvenida personalizado
    resultado.innerHTML = `
        <div style="color: #e91e63; margin-top: 20px; font-weight: bold;">
            ¡Bienvenido al Club, DNI ${dni}!
        </div>
        <p>Hemos enviado un código a ${email}</p>
    `;
});
