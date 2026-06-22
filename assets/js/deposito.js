$("#depositForm").on("submit", function(e) {
  e.preventDefault();

 const monto = parseFloat($("#montoDeposito").val());
if(monto > 0) {
 let saldo = obtenerSaldo();
 saldo += monto;
 actualizarSaldo(saldo);
 guardarTransaccion("Depósito", monto);

 $("#mensaje")
 .removeClass("d-none alert-danger")
  .addClass("alert-success")
  .text(`Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`); 

guardarTransaccion("Depósito", monto);
} else {
  $("#mensaje")
  .removeClass("d-none alert-success")
  .addClass("alert-danger")
  .text("Por favor, ingrese un monto válido para el depósito.");  
}
});