if(localStorage.getItem("saldo") === null){
    localStorage.setItem("saldo", "1000");
}

funtion obtenerSaldo(){
    return parseFloat(localStorage.getItem("saldo"));
}

function actualizarSaldo(nuevoSaldo){
    localStorage.setItem("saldo", nuevoSaldo.toString());
}

funtion guardarTransaccion(tipo, monto){
    const fecha = new date().toLocaleString();
    const nueva = {fecha, tipo, monto};

    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    transacciones.push(nueva);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
}