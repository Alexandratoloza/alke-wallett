$(document).trigger("depositoRealizado", [monto]);


document.addEventListener("DOMContentLoaded", () => {
  const btnDeposito = document.getElementById("btnDeposito");
  const mensaje = document.getElementById("mensaje");

  btnDeposito.addEventListener("click", () => {
    const monto = parseFloat(document.getElementById("monto").value);

    // Validación del monto
    if (isNaN(monto) || monto <= 0) {
      mensaje.innerHTML = `<div class="alert alert-danger">Ingrese un monto válido</div>`;
      return;
    }

    // Obtener saldo actual
    let saldo = parseFloat(localStorage.getItem("saldo") || 0);
    saldo += monto;
    localStorage.setItem("saldo", saldo);

    // Guardar movimiento
    let movimientos = JSON.parse(localStorage.getItem("movimientos") || "[]");
    movimientos.push(`Depósito de $${monto}`);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    // Mostrar mensaje y redirigir
    mensaje.innerHTML = `<div class="alert alert-success">Depósito realizado. Nuevo saldo: $${saldo}</div>`;
    setTimeout(() => window.location.href = "menu.html", 1500);
  });
});
