$(document).ready(function() {
  $("#depositForm").on("submit", function(e) {
    e.preventDefault();

    let monto = parseFloat($("#montoDeposito").val());

    if (monto > 0) {
      // Dispara el evento para que menu.js lo escuche
      $(document).trigger("depositoRealizado", [monto]);

      $("#mensaje").text("Depósito de $" + monto + " realizado con éxito.")
                   .css("color", "green");
      $("#montoDeposito").val(""); // limpiar campo
    } else {
      $("#mensaje").text("Ingrese un monto válido.")
                   .css("color", "red");
    }
  });
});
