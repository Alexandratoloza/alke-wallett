// Entrada de datos: Pedir dos números al usuario con prompt
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

// Convertir a número lo leído del prompt
num1 = Number(num1);
num2 = Number(num2);

// Proceso: Calcular diferencia
let diferencia = num1 - num2;

// Salida en consola
console.log("La diferencia es: " + diferencia);

// Salida en la etiqueta <p id="resultado">

// 1: usando innerText, como selector el id "resultado1" usando getElementById
document.getElementById("resultado1").innerText = "La diferencia es: " + diferencia;

// 2: usando textContent, como selector el id "resultado2" usando getElementById
document.getElementById("resultado2").textContent = "La diferencia es: " + diferencia;

// 3: usando innerHTML (permite etiquetas dentro), como selector el id "resultado3" usando getElementById
document.getElementById("resultado3").innerHTML = "<strong>La diferencia es:</strong> " + diferencia;

