//1. Crear una función que mueestre Hola Mundo!
function mostrarHolaMundo() {
    console.log("¡Hola Mundo!");
}

//2. Cree una función que recibe un nombre como parámetro y muestra: Hola, [nombre]!
function holaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

holaNombre('Pato');

//3. Crea una función que recibe un número como paramámetro y devuelve su promedio
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(4, 7, 10);
console.log('promedio');

//4. Crea una función que recibe un número como parámetro y devuelve el doble de ese número
function dobleNumero(numero) {
    return numero * 2;
}
let resultadoDoble = dobleNumero(5);
console.log(resultadoDoble);

//5. Cree una función que reciba dos números como parámetros y devuelva el mayor de ellos. 
function encontrarMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

let encontrarMayor = encontrarMayor(10, 20);
console.log(encontrarMayor);

//6. Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo. 
function cuadrado(numero) {
    return numero * numero;
}
let resultadoCuadrado = cuadrado(2);
console.log(resultadoCuadrado);