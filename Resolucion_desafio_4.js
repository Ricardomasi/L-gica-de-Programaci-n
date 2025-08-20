//1. Crea una lista vacía llamada "Lista Genérica"
let listaGenerica = []; 

/*2. Crea una lista de lenguaje de progrmamación llamada "Lenguajes de Programación" con los siguientes elementos:
'JavaScript', 'C', 'Python', 'Java', 'C++', 'Kotlin'*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'Python', 'Java', 'C++', 'Kotlin'];

/*3. Agrega a la lista "Lenguajes de Programación" los siguientes elementos al final de la lista:
Java, Ruby, GoLang.*/

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*4. Crea una función que muestre en la consola todos los elementos de la lista 
"Lenguajes de Programación"*/

function mostrarLenguajes() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajes();

/*5. Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/
function mostrarLenguajesInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }   
}
mostrarLenguajesInverso();

/*6. Crea una función que calcule el promedio de los elementos en una lista de 
números.*/
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return numeros.length > 0 ? suma / numeros.length : 0;
}
let numeros = [10, 20, 30, 40, 50];
let media = calcularPromedio(numeros);
console.log(`El promedio es: ${media}`);


/*7. Crea una función que muestre en la consola el número más grande 
y el número más pequeño en una lista.*/
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//8. Crea una función que reciba una lista de números y devuelva una nueva lista
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);


/*9. Crea una función que devuelva la posición en la lista donde se 
encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function encontrarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

//10. Crea una función que reciba dos listas de números del mismo tamaño y 
//devuelva una nueva lista con la suma de los elementos uno a uno. 
function sumarListas(lista1, lista) {
    return lista1.map((num, index) => num + lista[index]);

}
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado); // [5, 7, 9]

/*11. Crea una función que reciba una lista de números y devuelva una lista 
con el cuadrado de cada número.*/
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}
const lista = [2, 3, 4];
const resultado = cuadradoLista(lista); 
console.log(resultado); // [4, 9, 16]

