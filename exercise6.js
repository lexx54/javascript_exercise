//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocaConso = (texto = "") => {
  let regex = /a|e|i|o|u/i;
  let vocal = 0;
  let consonate = 0;
  for (let i = 0; i < texto.length; i++) {
    if (!texto) return "you didnt enter anything";
    if (typeof texto !== "string") return "you didnt enter a text";
    if (texto[i] === " ") continue;
    if (regex.test(texto[i])) vocal += 1;
    if (!regex.test(texto[i])) consonate += 1;
  }
  return `el texto ${texto} tiene ${vocal} vocales y ${consonate} consonantes`;
};
console.log(vocaConso("hola mundo"));
console.log(vocaConso("Maria Te Amo"));
//19) Programa una función que valide que un texto sea un nombre válido,
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const nombreVeririficar = (texto = "") => {
  const regex = /[a-z]/gi;
  if (typeof texto !== "string") return "you must enter a string";
  if (!texto) return "you didnt enter anything";
  if (regex.test(texto)) return `bienvenido ${texto}`;
};
console.log(nombreVeririficar("Jonatha Mircha"));
console.log(nombreVeririficar("Jonatha Mircha 4"));
//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
