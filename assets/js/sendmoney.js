 const contactos = ["Juan Perez", "Maria Gomez", "Carlos Sanchez", "Ana Rodriguez", "Luis Fernandez"];

 $("#destinatario").$autocomplete({
     source: contactos,
     minLength: 1
 });

 let saldo = 1000;

 let transacciones = [];

 $("sendMoneyForm").on("submit", function(event) {
     event.preventDefault();

     const destinatario = $("#destinatario").val();
     const monto = parseFloat($("#monto").val()); 

     if (monto <= 0) {
      $("#resultado").text("Monto inválido. Por favor, ingresa un monto mayor a cero.");
         return;
     }

     if (monto > saldo) {
      $("#resultado").text("Saldo insuficiente. Tu saldo actual es: $" + saldo);
         return;
     }  

     saldo -= monto;
     $("#resultado").text("Has enviado $" + monto + " a " + destinatario + ". Tu nuevo saldo es: $" + saldo);

     const transaccion = {
         destinatario: destinatario,
         monto: monto,
         fecha: new Date().toLocaleString()
     }; 
     transacciones.push(transaccion); 

     $("#resultado").text("has enviado $" + monto + " a " + destinatario + ". Tu nuevo saldo es: $" + saldo);

     $("#destinatario").val("");
     $("#monto").val("");
 });
 $("#historial").append("<h3>Historial de Transacciones</h3>");