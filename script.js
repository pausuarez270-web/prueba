document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    
    // Aquí podrías validar el DNI, pero por ahora lo mandamos directo al dashboard
    window.location.href = "dashboard.html"; 
});
