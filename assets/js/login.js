$("#loginForm").on("submit", function(event) {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  // Validación simple (puedes mejorar con tu propia lógica)
  if (email === "usuario@alke.com" && password === "1234") {
    $("#message")
      .removeClass("alert-danger")
      .addClass("alert alert-success")
      .text("Login exitoso. Redirigiendo...");

    // Redirigir al menú
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1500);
  } else {
    $("#message")
      .removeClass("alert-success")
      .addClass("alert alert-danger")
      .text("Email o contraseña incorrectos");
  }
});
