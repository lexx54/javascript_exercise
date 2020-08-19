//5) Programa una función que invierta las palabras de una cadena de texto,
//pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertir = (texto = "") => {
  let newWord = "";
  if (typeof texto !== "string") {
    return "this is not a string";
  } else if (texto === "") {
    return "this is an empty sting";
  } else {
    for (let i = 0; i < texto.length; i++) {
      newWord = texto.substring(i, i + 1) + newWord;
    }
    return newWord;
  }
};

//test 1
console.log(invertir("hola mundo"));
//test 2
console.log(invertir("maria te amo"));
//test3
console.log(invertir(3));
//test 4
console.log(invertir());

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const buscador = (text, word) => {
//   let buscada = new RegExp(word);
//   let ocurrencias = text.match(buscada);

//   return ocurrencias.length;
// };

// console.log(buscador("hola mundo adios mundo", "mundo"));

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
//pe. mifuncion("Salas") devolverá true.
const verificador = (text = "") => {
  if (typeof text !== "string" || !text) return "you didnt enter a string";
  return invertir(text.toLowerCase()) === text.toLowerCase();
};

//test 1
console.log(verificador("Salas"));
//test 2
console.log(verificador("ana"));
//test 3
console.log(verificador("hola"));
//test 4
console.log(verificador(4));

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.log("no ingresaste un texto")
    : !patron
    ? console.log("no ingresaste caracteres")
    : console.log(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
