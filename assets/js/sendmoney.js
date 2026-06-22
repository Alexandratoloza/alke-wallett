$("#sendMoneyForm").on("submit", function(event) {
  event.preventDefault();

  const destinatario = $("#destinatario").val();
  const monto = parseFloat($("#monto").val());

  let saldo = obtenerSaldo();

  if (monto > 0 && monto <= saldo) {
    saldo -= monto;

    // Guardar saldo actualizado
    actualizarSaldo(saldo);

    // Mostrar saldo en pantalla
    $("#saldo").text("Saldo actual: $" + saldo);

    // Mostrar mensaje de éxito
    $("#resultado")
      .removeClass("d-none alert-danger")
      .addClass("alert alert-success")
      .text("Has enviado $" + monto + " a " + destinatario);

    // Guardar transacción en historial
    guardarTransaccion("Envío", monto);
  } else {
    $("#resultado")
      .removeClass("d-none alert-success")
      .addClass("alert alert-danger")
      .text("Monto inválido o saldo insuficiente");
  }
});
