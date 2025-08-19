/*1. Crear una función que calcule el índice de masa corporal (IMC) de una persona a partir 
de su altura en metros y peso en kilogramos, que se recibiran como parámetros.*/

function calcularIMC(altura, peso) {
    // El IMC se calcula como peso / (altura * altura)
    var imc = peso / (altura * altura);
    return imc;
}

/*2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function calcularFactorial(numero) {
    //El factorial no esta definido para números negativos
    if (numero === 0  || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);  
    }
}
//Ejemplo de uso 
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

/*3. Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en reales (moneda brasileña), si deseas puedes 
hacerlo con el valor del dólar en tú país. Para esto considera la cotización
del dólar igual a R$ 4.80*/

function conver(valorDolar) {
    // Valor del dólar en reales
    var cotizacion = 4.80;
    var reales = valorDolar * cotizacion;
    return reales; 
}
// Ejemplo de uso
let valorDolar = 100;
let valorReales = conver(valorDolar);
console.log(`El valor de ${valorDolar} dólares es equivalente a ${valorReales} reales.`);

/*4. Crea una función que muestre en pantalla el área y el perímetro de 
una sala rectangular, utilizando la altura y el ancho que se proporcionará
como parámetros.*/
function areaPerimetro(altura, ancho) {
    var area = altura * ancho;
    var perimetro = 2 * (altura + ancho);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
    
}
// Ejemplo de uso
let altura = 5;
let ancho = 10;
areaPerimetro(altura, ancho);

/*5. Cree una función que muestre en pantalla el área y perímetro de una 
sala circular, utilizando su radio que se proporcionará como parámetro.
Considere Pi = 3,14.*/
function areaPerimetroCirculo(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}
// Ejemplo de uso
let radio = 7;
areaPerimetroCirculo(radio);

/*6. Crea una función que muestre en pantalla la tabla de multiplicar 
de un número dado como parámetro.*/
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
// Ejemplo de uso
let numeroTabla = 5;
tablaMultiplicar(numeroTabla);