    // Obtener referencia al div con id "ejemplo"
    const div = document.getElementById("ejemplo");

    // innerText normaliza espacios y saltos de línea
    document.getElementById("resultado1").innerText = div.innerText;

    // textContent conserva espacios y saltos tal cual están en el HTML
    document.getElementById("resultado2").textContent = div.textContent;

