    // Usando querySelector
    const div = document.querySelector("#ejemplo");

    // innerText normaliza espacios y saltos de línea
    document.querySelector("#resultado1").innerText = div.innerText;

    // textContent conserva espacios y saltos tal cual están en el HTML
    document.querySelector("#resultado2").textContent = div.textContent;

