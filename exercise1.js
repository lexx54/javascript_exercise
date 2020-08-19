//exercise 1
//Programa una funcion que cuente el numero de caracteres de una cadena de text
//solucion funcion("hola mundo") devolvera 10
// const contador = (texto) => {
//   if (typeof texto !== "string") {
//     return "this is not a string, it cant be count";
//   } else {
//     let counter = 0;
//     for (let i = 0; i < texto.length; i++) {
//       counter += 1;
//     }
//     return counter;
//   }
// };
const contador = (texto) =>
  typeof texto !== "string"
    ? `this is not a string it cant be count`
    : `the string ${texto} has ${texto.length}`;

//test with a string
console.log(contador("hola mundo"));
//test with a number
console.log(contador(10));
//test with an array
console.log(contador([1, 2, 3]));

//exercise 2
//programa una funcion que devueva el texto recortado segun el numero de caracteres indicados
//solucion funcion("hola mundo",4) devolvera "hola"

// const cortador = (texto, num) => {
//   if (typeof texto !== "string") {
//     return "this is not a string";
//   } else {
//     return texto.slice(0, num + 1);
//   }
// };

const cortador = (texto, num = undefined) =>
  typeof texto !== "string" ? `this is not a string` : texto.slice(0, num);

//first test
console.log(cortador("hola mundo", 4));
//second test
console.log(cortador("hola mundo", 7));
//test with a number;
console.log(cortador(5, 4));

//exercise 3
//programa una funcion que dada un string te devuelve un array de textos separados por ciertos caracter
//solucion funcion("hola que tal"," ") devolvera ["hola","que", "tal"];

// const separador = (texto, character) => {
//   if (typeof texto !== "string") {
//     return "this is not a string";
//   } else {
//     return texto.split(character);
//   }
// };

const separador = (texto, character) =>
  typeof texto !== "string" ? `this is not a string` : texto.split(character);

//test 1
console.log(separador("hola que tal", " "));
// test 2
console.log(separador("hola, estoy practicando, javascrip", ", "));
//test 3
console.log(separador([1, 2, 3], " "));

//exercise 4
//programa una funcion que repita un texto X veces
//funcion(hola mundo,3) devolvera hola mundo hola mundo hola mundo

const multiplicador = (texto = "", multiplier = undefined) => {
  if (typeof texto !== "string") {
    return "this is not a string";
  } else if (multiplier === undefined) {
    return "you didnt enter a multiplier";
  } else if (multiplier === 0) {
    return "the number cant be 0";
  } else if (Math.sign(multiplier) === -1) {
    return "you enter a negative number";
  } else {
    let newText = "";
    for (let i = 0; i < multiplier; i++) {
      newText += `${texto} `;
    }
    return newText;
  }
};
//test 1
console.log(multiplicador("hola mundo", 3));
//test 2
console.log(multiplicador("maria te amo", 2));
//test 3
console.log(multiplicador(3, 3));
