$(document).ready(function() {
  $("#loginForm").on("submit", function(e) {
    e.preventDefault();

    let email = $("#exampleInputEmail1").val().trim().toLowerCase();
    let pass = $("#exampleInputPassword1").val().trim();

    if(email === "admin@alke.com" && pass === "1234") {
      $("#message").text("Acceso concedido ✅").css("color", "green");
      window.location.href = "menu.html"; 
    } else {
      $("#message").text("Credenciales inválidas ❌").css("color", "red");
    }
  });
});
