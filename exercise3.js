//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const adivinar = () => {
  let num = Math.ceil(Math.random() * 600);
  let valor = num > 500 && num <= 600 ? num : adivinar();
  return valor;
};
console.log(adivinar());
console.log(adivinar());
console.log(adivinar());

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
//pe. miFuncion(2002) devolverá true.
const capi = (num = 0) => {
  if (!num) return "no ingresaste un numero";
  if (typeof num !== "number")
    return `el valor ${num} ingresado, NO es un numero`;
  let newNum = num.toString();
  let invertido = newNum.split("").reverse().join("");

  return newNum === invertido;
};
console.log(capi(2002));
console.log(capi(2004));
console.log(capi(1001));

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
//pe. miFuncion(5) devolverá 120.
const factorial = (num) => {
  if (typeof num !== "number") return "its not a number";
  if (num < 0) return "it cant be negative";
  if (num === 0) return 1;
  let facto = 1;
  for (let i = 1; i < num + 1; i++) {
    facto *= i;
  }
  return facto;
};
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-1));
