  window.location.href = "dashboard.html"; 
});
// Simulamos que el cliente tiene cierta cantidad de puntos
const puntosCliente = 1250; 

// Buscamos el lugar en la pantalla donde escribiremos el rango
const textoRango = document.getElementById('rango-cliente');

// Lógica de niveles
if (puntosCliente >= 300000) {
    textoRango.innerText = "Eau de Parfum";
    textoRango.style.color = "#d4af37"; // Un color dorado elegante
} 
else if (puntosCliente >= 100000) {
    textoRango.innerText = "Elixir";
    textoRango.style.color = "#e91e63"; // Rosa fuerte
} 
else {
    textoRango.innerText = "Eau de Toilette";
    textoRango.style.color = "#333"; // Color normal
}
