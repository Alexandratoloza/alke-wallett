if (localStorage.getItem("saldo") === null) {
    localStorage.setItem("saldo", "1000");
}

function obtenerSaldo() {
    return parseFloat(localStorage.getItem("saldo"));
}

function actualizarSaldo(nuevoSaldo) {
    localStorage.setItem("saldo", nuevoSaldo.toString());
}

function guardarTransaccion(tipo, monto) {
    const fecha = new Date().toLocaleString();
    const nueva = { fecha, tipo, monto };

    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    transacciones.push(nueva);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
}
