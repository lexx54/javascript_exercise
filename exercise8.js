//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenar = (lista) => {
  if (typeof lista !== "object") return "this is not an array";
  for (let i = 0; i < lista.length; i++)
    if (typeof lista[i] !== "number") return "we can compare just number";
  const ascendente = [...lista];
  const descendente = [...lista];
  ascendente.sort((a, b) => a - b);
  descendente.sort((a, b) => b - a);
  return `asc: ${ascendente} and desc: ${descendente}`;
};
//test 1
console.log(ordenar([7, 5, 7, 8, 6]));
//test 2
console.log(ordenar());
//test 3
console.log(ordenar([1, 2, 3, "4", 5]));
//test 4
console.log(ordenar([1, 2, 3, 4, 5]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const desechar = (lista = undefined) => {
  if (typeof lista !== "object") return "this is not an array";
  let newArray = [];
  for (let i = 0; i < lista.length; i++) {
    if (newArray.includes(lista[i])) continue;
    newArray.push(lista[i]);
  }
  return `array without duplication ${newArray}`;
};
//test1
console.log(desechar(["x", 10, "x", 2, "10", 10, true, true]));
//test 2
console.log(desechar());
//test 3
console.log(desechar("prueba"));
//test 4
console.log(desechar([1, "1", false, false, 2, "2", "1", 1]));
//26) Programa una función que dado un arreglo de números obtenga el promedio,
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (lista = undefined) => {
  if (typeof lista !== "object") return "give me an array";
  let resultado = 0;
  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] !== "number")
      return "there is a not number in the array";
    resultado += lista[i];
  }
  return resultado / lista.length;
};
//test 1
console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//test 2
console.log(promedio([9, 8, "7", 6, 5, 4, 3, 2, 1, 0]));
//test 3
console.log(promedio(9, 8, 7, 6, 5, 4, 3, 2, 1, 0));
