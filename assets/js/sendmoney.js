$(document).ready(function() {
  // Lista de contactos (puedes ampliarla)
  const contactos = [
    "Juan Pérez",
    "María González",
    "Carlos López",
    "Ana Torres",
    "usuario@alke.com"
  ];

  // Autocompletar con jQuery UI
  $("#destinatario").autocomplete({
    source: contactos
  });

  // Lógica de envío de dinero
  $("#sendMoneyForm").on("submit", function(event) {
    event.preventDefault();

    const destinatario = $("#destinatario").val();
    const monto = parseFloat($("#monto").val());
    let saldo = obtenerSaldo();

    if (monto > 0 && monto <= saldo) {
      saldo -= monto;
      actualizarSaldo(saldo);

      $("#resultado")
        .removeClass("alert-danger")
        .addClass("alert alert-success")
        .text("Has enviado $" + monto + " a " + destinatario);

      guardarTransaccion("Envío", monto);
    } else {
      $("#resultado")
        .removeClass("alert-success")
        .addClass("alert alert-danger")
        .text("Monto inválido o saldo insuficiente");
    }
  });
});
