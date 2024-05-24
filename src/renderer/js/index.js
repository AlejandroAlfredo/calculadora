import { crearPromesa, sumar, restar, dividir, multiplicar } from "./operaciones";

window.addEventListener("DOMContentLoaded", function () {
  let operacionActual = undefined;
  let values = [];
  let resultado = undefined;
  let textOperaciones = document.getElementById("operaciones");
  let textResult = document.getElementById("resultado");
  let btnSiete = document.getElementById("btnSiete");
  let btnOcho = document.getElementById("btnOcho");
  let btnNueve = document.getElementById("btnNueve");
  let btnCuatro = document.getElementById("btnCuatro");
  let btnCinco = document.getElementById("btnCinco");
  let btnSeis = document.getElementById("btnSeis");
  let btnUno = document.getElementById("btnUno");
  let btnDos = document.getElementById("btnDos");
  let btnTres = document.getElementById("btnTres");
  let btnCero = document.getElementById("btnCero");
  let btnDelete = document.getElementById("btnDelete");
  let btnClear = document.getElementById("btnClear");
  let btnPunto = document.getElementById("btnPunto");
  let btnSumar = document.getElementById("btnSumar");
  let btnRestar = document.getElementById("btnRestar");
  let btnMultiplicar = document.getElementById("btnMultiplicar");
  let btnDividir = document.getElementById("btnDividir");
  let btnIgual = document.getElementById("btnIgual");
  let btnNegacion = document.getElementById("btnNegacion");
  btnSiete.addEventListener("click", function () {
    textResult.value += "7";
  });
  btnOcho.addEventListener("click", function () {
    textResult.value += "8";
  });
  btnNueve.addEventListener("click", function () {
    textResult.value += "9";
  });
  btnCuatro.addEventListener("click", function () {
    textResult.value += "4";
  });
  btnCinco.addEventListener("click", function () {
    textResult.value += "5";
  });
  btnSeis.addEventListener("click", function () {
    textResult.value += "6";
  });
  btnUno.addEventListener("click", function () {
    textResult.value += "1";
  });
  btnDos.addEventListener("click", function () {
    textResult.value += "2";
  });
  btnTres.addEventListener("click", function () {
    textResult.value += "3";
  });
  btnCero.addEventListener("click", function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    if ((longitud > 0 && numeros != "0") || numeros == "") {
      textResult.value += "0";
    }
  });
  btnDelete.addEventListener("click", function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    if (longitud == 0) {
      textResult.placeholder = "0";
    } else {
      textResult.value = numeros.slice(0, longitud - 1);
    }
  });
  btnClear.addEventListener("click", function () {
    textResult.value = "";
    textResult.placeholder = "0";
    textOperaciones.value = "";
    values = [];
    operacionActual = undefined;
  });
  btnPunto.addEventListener("click", function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    if (!numeros.includes(".")) {
      if (longitud > 0) {
        textResult.value = numeros + ".";
      }
    }
  });
  btnSumar.addEventListener("click", async function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    let outOperaciones = String(textOperaciones.value);
    let longitudOperaciones = outOperaciones.length;
    if (longitudOperaciones < 1 && longitud > 0) {
      values.push(parseFloat(numeros));
      operacionActual = "sumar";
      textOperaciones.value += numeros + "+";
      textResult.value = "";
    } else if (longitudOperaciones > 0 && longitud < 1) {
      if (operacionActual != "sumar") {
        if (operacionActual == "igual") {
          textOperaciones.value = resultado + "+";
        } else {
          textOperaciones.value = outOperaciones.slice(0, longitud - 1) + "+";
        }
        operacionActual = "sumar";
      }
    } else if (longitudOperaciones > 0 && longitud > 0) {
      // resuelve y se reinicia
      if (operacionActual == "sumar") {
        values.push(parseFloat(numeros));
        resultado = await crearPromesa(sumar, values[0], values[1]);
        textOperaciones.value = resultado + "+";
        operacionActual = "sumar";
        textResult.value = "";
        values = [];
        values.push(resultado);
      }
    }
  });
  btnNegacion.addEventListener("click", function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    if (longitud > 0) {
      if (numeros.includes("-")) {
        textResult.value = numeros.replace("-", "");
      } else {
        textResult.value = "-" + numeros;
      }
    }
  });
  btnRestar.addEventListener("click", async function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    let outOperaciones = String(textOperaciones.value);
    let longitudOperaciones = outOperaciones.length;
    if (longitudOperaciones < 1 && longitud > 0) {
      values.push(parseFloat(numeros));
      operacionActual = "restar";
      textOperaciones.value += numeros + "-";
      textResult.value = "";
    } else if (longitudOperaciones > 0 && longitud < 1) {
      if (operacionActual != "restar") {
        if (operacionActual == "igual") {
          textOperaciones.value = resultado + "-";
        } else {
          textOperaciones.value = outOperaciones.slice(0, longitud - 1) + "-";
        }
        operacionActual = "restar";
      }
    } else if (longitudOperaciones > 0 && longitud > 0) {
      // resuelve y se reinicia
      if (operacionActual == "restar") {
        values.push(parseFloat(numeros));
        resultado = await crearPromesa(restar, values[0], values[1]);
        textOperaciones.value = resultado + "-";
        operacionActual = "restar";
        textResult.value = "";
        values = [];
        values.push(resultado);
      }
    }
  });
  btnMultiplicar.addEventListener("click", async function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    let outOperaciones = String(textOperaciones.value);
    let longitudOperaciones = outOperaciones.length;
    if (longitudOperaciones < 1 && longitud > 0) {
      values.push(parseFloat(numeros));
      operacionActual = "multiplicar";
      textOperaciones.value += numeros + "*";
      textResult.value = "";
    } else if (longitudOperaciones > 0 && longitud < 1) {
      if (operacionActual != "multiplicar") {
        if (operacionActual == "igual") {
          textOperaciones.value = resultado + "*";
        } else {
          textOperaciones.value = outOperaciones.slice(0, longitud - 1) + "*";
        }
        operacionActual = "multiplicar";
      }
    } else if (longitudOperaciones > 0 && longitud > 0) {
      // resuelve y se reinicia
      if (operacionActual == "multiplicar") {
        values.push(parseFloat(numeros));
        resultado = await crearPromesa(multiplicar, values[0], values[1]);
        textOperaciones.value = resultado + "*";
        operacionActual = "multiplicar";
        textResult.value = "";
        values = [];
        values.push(resultado);
      }
    }
  });
  btnDividir.addEventListener("click", async function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    let outOperaciones = String(textOperaciones.value);
    let longitudOperaciones = outOperaciones.length;
    if (longitudOperaciones < 1 && longitud > 0) {
      values.push(parseFloat(numeros));
      operacionActual = "dividir";
      textOperaciones.value += numeros + "/";
      textResult.value = "";
    } else if (longitudOperaciones > 0 && longitud < 1) {
      if (operacionActual != "dividir") {
        if (operacionActual == "igual") {
          textOperaciones.value = resultado + "/";
        } else {
          textOperaciones.value = outOperaciones.slice(0, longitud - 1) + "/";
        }
        operacionActual = "dividir";
      }
    } else if (longitudOperaciones > 0 && longitud > 0) {
      // resuelve y se reinicia
      if (operacionActual == "dividir") {
        values.push(parseFloat(numeros));
        await crearPromesa(dividir, values[0], values[1])
          .then((respuesta) => {
            resultado = respuesta;
          })
          .catch((err) => {
            resultado = err;
          });
        textOperaciones.value = resultado + "/";
        operacionActual = "dividir";
        textResult.value = "";
        values = [];
        values.push(resultado);
      }
    }
  });
  btnIgual.addEventListener("click", async function () {
    let numeros = String(textResult.value);
    let longitud = numeros.length;
    let outOperaciones = String(textOperaciones.value);
    let longitudOperaciones = outOperaciones.length;
    if (operacionActual != "igual") {
      if (longitudOperaciones > 0 && longitud > 0) {
        values.push(parseFloat(numeros));
        if (operacionActual == "sumar") {
          resultado = await crearPromesa(sumar, values[0], values[1]);
        } else if (operacionActual == "restar") {
          resultado = await crearPromesa(restar, values[0], values[1]);
        } else if (operacionActual == "multiplicar") {
          await crearPromesa(multiplicar, values[0], values[1]).then((respuesta) => {
            resultado = respuesta;
          });
        } else if (operacionActual == "dividir") {
          await crearPromesa(dividir, values[0], values[1])
            .then((respuesta) => {
              resultado = respuesta;
            })
            .catch((err) => {
              resultado = err;
            });
        }
        textOperaciones.value += numeros + "=" + resultado;
        operacionActual = "igual";
        textResult.value = "";
        values = [];
        values.push(resultado);
      }
    }
  });
});
