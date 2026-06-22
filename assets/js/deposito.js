$("#depositForm").on("submit", function(event) {
  event.preventDefault();

  const monto = parseFloat($("#montoDeposito").val());

  if (monto > 0) {
    // Leer saldo actual desde localStorage
    let saldo = obtenerSaldo();
    saldo += monto;

    // Guardar saldo actualizado
    actualizarSaldo(saldo);

    // Mostrar mensaje en pantalla
    $("#mensaje")
      .removeClass("d-none alert-danger")
      .addClass("alert alert-success")
      .text("Depósito realizado: $" + monto + ". Saldo actual: $" + saldo);

    // Guardar transacción en historial
    guardarTransaccion("Depósito", monto);
  } else {
    $("#mensaje")
      .removeClass("d-none alert-success")
      .addClass("alert alert-danger")
      .text("Monto inválido");
  }
});
