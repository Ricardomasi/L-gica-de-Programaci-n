//Cambia el contenido de etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del desafío"
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

//Cree una función que muestre en consola el mensaje "El botón fue clicado" siempre que se presiones el botón 'console'
/*Antes de crear la función, debes agregar el atributo onclick al botón 'console' en index.html*/

function intentoDeUsuario() {
    alert('El botón fue clicado');
}

/*Crea una función que se ejecute cuando se haga click en el botón 'prompt', preguntando el nombre de una ciudad
de Brasil. Luego muestre una alerta con el mensaje concatenado la respuesta con el texto: "Estube en Río de Janeiro y me 
acorde de tí"*/ 

function preguntaCiudad() {
    let ciudad = prompt('¿Nombre de una ciudad de Brasil?');
    alert('Estuve en ' + ciudad + ' y me acordé de ti');
}

//Crea una función que muestre una alerta con el mensaje 'Yo amo JS' siempre que presiones el botón 'alert'

function pressUsuario() {
    alert('Yo amo JS');
}

//Al hacer clic en el botón 'suma', pide dos números y muestra el resultado de la suma en una alerta

function sumaNumeros() {
    let num1 = Number(prompt('Dime un número del 1 al 10:'));
    let num2 = Number(prompt('Dime otro número del 1 al 10:'));
    let resultado = num1 + num2;
    alert('El resultado de la suma es: ' + resultado);
}