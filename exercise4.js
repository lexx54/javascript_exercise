//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no,
//pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return "no ingresaste un numero";
  if (typeof numero !== "number") return `el valor ${numero} No es un numero`;
  if (numero === 0) return "el numero no peude ser 0";
  if (numero === 1) return "el numero no peude ser 1";
  if (Math.sign(numero) === -1) return "el numero no puede ser negativo";

  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`el numero ${numero} NO es primo`)
    : console.log(`el numero ${numero} SI es primo`);
};
numeroPrimo();
numeroPrimo("324");
numeroPrimo(7);
numeroPrimo(19);
numeroPrimo(18);
//13) Programa una función que determine si un número es par o impar,
//pe. miFuncion(29) devolverá Impar.
const evenOdd = (num = undefined) => {
  if (num === 0) return "zero is neither even nor odd";
  if (!num) return "you didnt enter anything";
  if (typeof num !== "number") return "you didnt enter a number";
  return num % 2 === 0 ? `el ${num} es par` : `el ${num} es impar`;
};

//test 1
console.log(evenOdd(10));
//test 2
console.log(evenOdd(3));
//test 3
console.log(evenOdd(0));
//test 4
console.log(evenOdd("hola"));
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
//pe. miFuncion(0,"C") devolverá 32°F.
const convertir = (grade = undefined, type = "") => {
  if (typeof grade !== "number" || grade === undefined)
    return "you didnt enter a grade or a number";
  if (!type || typeof type !== "string") return "you didnt enter a type";
  return type.toUpperCase() === "C"
    ? grade * 1.8 + 32
    : type.toUpperCase() === "F"
    ? (grade - 32) / 1.8
    : "you enter neither C or F";
};
//test 1
console.log(convertir(0, "c"));
//test 2
console.log(convertir(50, "f"));
//test 3
console.log(convertir("c"));
//test 4
console.log(convertir(0));
