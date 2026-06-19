$(document).ready(function() {
  let saldo = 1000;

  $('#saldo').text('$' + saldo);

  //actualizar saldo.
  function actualizarSaldo(nuevoSaldo) {
    saldo = nuevoSaldo;
    $('#saldo').text('$' + saldo);
  }

  
//depositos

$(document).on('depositoRealizado', function(e, monto) {
actualizarSaldo(saldo + monto);
alert("Depósito de $" + monto + " realizado. Nuevo saldo: $" + saldo);
});

//Envios

$(document).on('envioRealizado', function(e, monto, destinatario) {

  if (monto <= saldo) {
    actualizarSaldo(saldo - monto);
    alert("Envío de $" + monto + " realizado a " + destinatario + ". Nuevo saldo: $" + saldo);
  } else {
    alert("Fondos insuficientes para realizar el envío.");
  }
});



});