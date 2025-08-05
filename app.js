let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() *numeroMaximo) + 1;

  console.log(numeroGenerado, 'numero generado');
  console.log(listaNumeroSorteados);
  //Si ya sorteamos todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
  } else {
  //Si el numero generado esta en la lista
  if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalos de numeros
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

/*
function saludo() {
    let nombreUsuaruio = prompt('Ingresa tu nombre');
    console.log(`Hola, ${nombreUsuaruio}`);
}*/

/*
function numeroUsuario() {
    let numeroDeUsuario = prompt('Ingresa un número');
    const numeroX = 2 * numeroDeUsuario
    console.log(`El numero multiplicado es ${numeroX}`);
    
}
numeroUsuario()*/

// function numeroDeUsuario() {
//     alert('Ingresa 3 digitos');
//     let numerouno = prompt('Ingresa el primer digito');
//     let numerodos = prompt('Ingrese el segundo digito');
//     let numerotres = prompt('Ingrese el tercer digito');
//     let total = parseInt(numerouno) + parseInt(numerodos) + parseInt(numerotres);
//     let promedioTotal = total / 3
//     console.log(`El promedio es ${promedioTotal}`);
//     alert(`El promedio es ${promedioTotal}`)
// }
// numeroDeUsuario()

/*
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
calcularPromedio()*/

/*
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}*/

/*
let numero = 5;
let resultado = calcularFactorial(numero);
console.log( `El factorial de ${numero} es ${resultado} `);


function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) { 
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}*/

/*
let valorEnDolar = 50;
let valorEnReales = convertirDolaresReales(valorEnDolar);
console.log(`${valorEnDolar} dolares es R$${valorEnReales}`);

 
function convertirDolaresReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}*/

/*
let altura = 3;
let anchura = 5;
calcularAreaYPerimetroRectangular(altura, anchura);

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Area:" + area);
  console.log("Perimetro:" + perimetro);
}*/
