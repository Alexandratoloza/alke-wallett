$(document).ready(function() {
  // Mostrar saldo actual
  let saldo = obtenerSaldo();
  $("#saldo").text("$" + saldo);

  // Obtener historial de transacciones
  let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  let totalDepositos = 0;
  let totalEnvios = 0;
  let ultimoDeposito = null;
  let ultimoEnvio = null;

  // Recorrer transacciones
  transacciones.forEach(t => {
    if (t.tipo === "Depósito") {
      totalDepositos += parseFloat(t.monto);
      ultimoDeposito = t; // se va actualizando, al final queda el último
    } else if (t.tipo === "Envío") {
      totalEnvios += parseFloat(t.monto);
      ultimoEnvio = t;
    }
  });

  // Mostrar totales en las tarjetas
  $("#depositos").text("$" + totalDepositos);
  $("#envios").text("$" + totalEnvios);

  // Mostrar último depósito
  if (ultimoDeposito) {
    $("#ultimoDeposito").text(
      "Último depósito: $" + ultimoDeposito.monto + " el " + ultimoDeposito.fecha
    );
  } else {
    $("#ultimoDeposito").text("No hay depósitos registrados");
  }

  // Mostrar último envío
  if (ultimoEnvio) {
    $("#ultimoEnvio").text(
      "Última transferencia: $" + ultimoEnvio.monto + " el " + ultimoEnvio.fecha
    );
  } else {
    $("#ultimoEnvio").text("No hay envíos registrados");
  }
});
