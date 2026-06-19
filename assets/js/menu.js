document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje");

  document.getElementById("btnDepositar").addEventListener("click", () => {
    mensaje.innerHTML = `<div class="alert alert-info">Redirigiendo a depósito...</div>`;
    setTimeout(() => window.location.href = "deposit.html", 1000);
  });

  document.getElementById("btnEnviar").addEventListener("click", () => {
    mensaje.innerHTML = `<div class="alert alert-info">Redirigiendo a enviar dinero...</div>`;
    setTimeout(() => window.location.href = "sendmoney.html", 1000);
  });

  document.getElementById("btnMovimientos").addEventListener("click", () => {
    mensaje.innerHTML = `<div class="alert alert-info">Redirigiendo a últimos movimientos...</div>`;
    setTimeout(() => window.location.href = "transactions.html", 1000);
  });

  // Mostrar saldo actualizado desde localStorage
  const saldo = localStorage.getItem("saldo") || 0;
  document.getElementById("saldo").textContent = saldo;
});
