document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaMovimientos");
  const movimientos = JSON.parse(localStorage.getItem("movimientos") || "[]");

  if (movimientos.length === 0) {
    lista.innerHTML = `<li class="list-group-item">No hay movimientos registrados</li>`;
  } else {
    movimientos.forEach(m => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = m;
      lista.appendChild(li);
    });
  }
});
