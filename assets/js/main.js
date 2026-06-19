document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("btnLogin");
  const mensaje = document.getElementById("mensaje");

  btnLogin.addEventListener("click", function () {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    // Validar que la clave solo tenga números
    const soloNumeros = /^[0-9]+$/;

    if (!soloNumeros.test(password)) {
      mensaje.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> La clave debe contener solo números.
        </div>
      `;
      return;
    }

    // Credenciales correctas (puedes cambiarlas)
    const emailCorrecto = "usuario@ejemplo.com";
    const passwordCorrecto = "12345";

    if (email === emailCorrecto && password === passwordCorrecto) {
      mensaje.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Éxito:</strong> Inicio de sesión correcto. Redirigiendo...
        </div>
      `;
      setTimeout(() => {
        window.location.href = "menu.html";
      }, 1500);
    } else {
      mensaje.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> Credenciales incorrectas.
        </div>
      `;
    }
  });
});
