// Recuperar correo del usuario desde localStorage
const userEmail = localStorage.getItem("usuarioValido");

// Mostrarlo en la barra
document.querySelector("#userEmail").textContent = userEmail ? userEmail : "Invitado";

// Acción del botón Cerrar Sesión
document.querySelector("#btnLogout").addEventListener("click", function() {
  // Limpia el localStorage
  localStorage.removeItem("usuarioValido");
  // Redirige al formulario de login
  window.location.href = "index5.html";
});
