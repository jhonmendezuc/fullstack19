// excepciones: manejo de errores en JS

function division(a, b) {
  if (b === 0) {
    throw new Error("no puede incluir el numero cero en el divisor");
  }
  return a / b;
}

try {
  console.log(division(1, 0));
  console.log(division(1, 2));
} catch (error) {
  console.log("no puede inclur el numero cero en el divisor");
}

console.log("continua el programa");
console.log("continua el programa");
console.log("continua el programa");
console.log("continua el programa");
console.log("continua el programa");
console.log("continua el programa");
