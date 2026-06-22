$(document).ready(function() {
  let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  transacciones.forEach(t => {
    // Color según tipo
    let clase = t.tipo === "Depósito" ? "text-success fw-bold" : "text-danger fw-bold";

    $("#tablaTransacciones").append(
      `<tr>
        <td>${t.fecha}</td>
        <td>${t.tipo}</td>
        <td class="${clase}">$${t.monto}</td>
      </tr>`
    );
  });
});
