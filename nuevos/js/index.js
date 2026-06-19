// Entrada de datos: Pedir dos números al usuario con prompt
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

// Convertir a número lo leido del prompt
num1 = Number(num1);
num2 = Number(num2);

// Proceso: Calcular diferencia
let diferencia = num1 - num2;

// Diversas formas de mostrar el resultado (Salida de datos)

// Mostrar en consola
console.log("La diferencia es: " + diferencia);

// Mostrar en alerta en ventana tipo modal
alert("La diferencia es: " + diferencia);

// Mostrar en la pantalla del navegador en texto plano
document.write("La diferencia es: " + diferencia);

// Mostrar en la pantalla del navegador en un elemento HTML, usando concatenacion de cadenas
document.write("<p>La diferencia es: " + diferencia + "</p>");
