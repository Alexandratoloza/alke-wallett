// Credenciales predefinidas
const usuarioValido = "usuario@desfalcador.cl";
const claveValida = "123456";

// Guardar este usuario en el localStorage para futuro uso, antes se limpia el localStorage 
// para evitar conflictos con datos anteriores
localStorage.clear();
localStorage.setItem("usuarioValido", usuarioValido);

// Referencias de conexion al Html
const form = document.querySelector("#loginForm");
const errorMsg = document.querySelector("#errorMsg");
const btnCancelar = document.querySelector("#btnCancelar");

// Evento sobre el formulario con la acción del botón Aceptar
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envío automático del formulario

  // Obtiene los valores ingresados en el formulario del Html
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // validacion de credenciales
  if (email === usuarioValido && password === claveValida) {
    // Redirige al menú principal
    window.location.href = "index6.html";
  } else {
    // Muestra mensaje de error
    errorMsg.textContent = "Correo o contraseña incorrectos. Intente nuevamente.";
    errorMsg.style.display = "block";

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 5000);

    // Limpia el formulario
    form.reset();
  }
});

// Acción del botón Cancelar
btnCancelar.addEventListener("click", function() {
  localStorage.clear(); // Limpia el localStorage para eliminar cualquier dato almacenado
  window.location.href = "index4.html"; // Regresa al HTML inicial de aplicacion
});
