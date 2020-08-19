//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevar = (lista = undefined) => {
  if (typeof lista !== "object") return "this isnt an array";
  if (lista.length < 1) return "you need to type something";
  const newLista = [];
  for (let i = 0; i < lista.length; i++) {
    newLista.push(Math.pow(lista[i], 2));
  }
  return newLista;
};

console.log(elevar([1, 4, 5]));
console.log(elevar());
console.log(elevar([]));
console.log(elevar("hola"));
console.log(elevar(3));
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const altoBajo = (lista) => {
  if (typeof lista !== "object") return "this isnt an array";
  if (lista.length < 1) return "you need to type something";
  const newLista = [];
  lista.sort((a, b) => {
    return a - b;
  });
  newLista.unshift(lista[0]);
  newLista.unshift(lista[lista.length - 1]);
  return newLista;
};

console.log(altoBajo([1, 4, 5, 99, -60]));
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresImpar = (lista) => {
  if (typeof lista !== "object") return "this isnt an array";
  if (lista.length < 1) return "you need to type something";
  const parList = [],
    imparList = [];
  for (let i = 0; i < lista.length; i++) {
    lista[i] % 2 === 0 ? parList.push(lista[i]) : imparList.push(lista[i]);
  }
  return `pares ${parList} impares: ${imparList}`;
};
console.log(paresImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
