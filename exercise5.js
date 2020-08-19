//15) Programa una función para convertir números de base binaria a decimal y viceversa,
//pe. miFuncion(100,2) devolverá 4 base 10.
const convertir = (number = undefined, type = undefined) => {
  if (number === undefined) return "no ingresaste numero a convertir";
  if (typeof number !== "number")
    return `el valor de ${number} ingresado no es un numero`;
  if (type === undefined) return "no ingresaste la base a convertir";
  if (typeof type !== "number")
    return `el valor ${type} ingresado, no es un numero`;
  if (type === 2)
    return `el numero ${number} base ${type} = ${parseInt(
      number,
      type
    )} base 10`;
  if (type === 10)
    return `el numero ${number} base ${type} = ${number.toString(2)} base 2`;
};

console.log(convertir(100, 2));
console.log(convertir(131, 10));
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
//pe. miFuncion(1000, 20) devolverá 800.
const descuento = (monto = undefined, porcentaje = undefined) => {
  if (monto === undefined || porcentaje === undefined)
    return "you didnt enter the amount or the percentage";
  if (typeof monto !== "number" || typeof porcentaje !== "number")
    return "you didnt enter a number";
  if (monto === 0 || porcentaje === 0) return "you cant get a amount from 0";
  return monto - monto * (porcentaje / 100);
};
//test 1
console.log(descuento(1000, 20));
//test 2
console.log(descuento(1500, 25));
//test 3
console.log(descuento(1000));
//test 4
console.log(descuento("hola", 20));
//test 5
console.log(descuento(1000, "20"));

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const anos = (date) => {
  let d1 = date.getFullYear();
  console.log(d1);
  let d2 = new Date().getFullYear();
  return `${d2 - d1} en ${d2}`;
};

console.log(anos(new Date(1984, 4, 23)));
