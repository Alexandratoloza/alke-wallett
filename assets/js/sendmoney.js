document.addEventListener("DOMContentLoaded", () => {
  const contactosSelect = document.getElementById("contactos");
  const mensaje = document.getElementById("mensaje");

  // Cargar contactos guardados
  let contactos = JSON.parse(localStorage.getItem("contactos") || "[]");
  actualizarSelect();

  // Abrir modal
  document.getElementById("btnNuevoContacto").addEventListener("click", () => {
    new bootstrap.Modal(document.getElementById("modalContacto")).show();
  });

  // Guardar contacto
  document.getElementById("guardarContacto").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const cbu = document.getElementById("cbu").value;
    const alias = document.getElementById("alias").value;
    const banco = document.getElementById("banco").value;

    if (!nombre || !cbu || !alias || !banco) {
      alert("Complete todos los campos");
      return;
    }

    contactos.push({ nombre, cbu, alias, banco });
    localStorage.setItem("contactos", JSON.stringify(contactos));
    actualizarSelect();
    bootstrap.Modal.getInstance(document.getElementById("modalContacto")).hide();
  });

  // Enviar dinero
  document.getElementById("btnEnviarDinero").addEventListener("click", () => {
    const monto = parseFloat(document.getElementById("montoEnviar").value);
    if (isNaN(monto) || monto <= 0) {
      mensaje.innerHTML = `<div class="alert alert-danger">Ingrese un monto válido</div>`;
      return;
    }

    let saldo = parseFloat(localStorage.getItem("saldo") || 0);
    if (monto > saldo) {
      mensaje.innerHTML = `<div class="alert alert-danger">Saldo insuficiente</div>`;
      return;
    }

    const contactoSeleccionado = contactosSelect.value;
    saldo -= monto;
    localStorage.setItem("saldo", saldo);

    let movimientos = JSON.parse(localStorage.getItem("movimientos") || "[]");
    movimientos.push(`Envío de $${monto} a ${contactoSeleccionado}`);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    mensaje.innerHTML = `<div class="alert alert-success">Dinero enviado. Nuevo saldo: $${saldo}</div>`;
    setTimeout(() => window.location.href = "menu.html", 1500);
  });

  // Función para actualizar el select con los contactos guardados
  function actualizarSelect() {
    contactosSelect.innerHTML = "";
    contactos.forEach(c => {
      const option = document.createElement("option");
      option.textContent = `${c.nombre} (${c.alias}) - ${c.banco}`;
      contactosSelect.appendChild(option);
    });
  }
});
