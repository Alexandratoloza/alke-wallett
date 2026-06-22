let transacciones = [];

function agregarTransaccion(tipo, monto) {
  const fecha = new Date().toLocaleString();
  const nueva = {fecha, tipo, monto};
  transacciones.push(nueva);

$("#trablaTransacciones").append(`<tr>
      <td>${nueva.fecha}</td>
      <td>${nueva.tipo}</td>
      <td>$${nueva.monto}</td>
    </tr>`
);

}