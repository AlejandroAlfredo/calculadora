function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function dividir(x, y) {
  try {
    let resultado = x / y;
    return resultado;
  } catch (error) {
    throw new Error(`ERROR => ${error}`);
  }
}

function crearPromesa(func, x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(func(x, y));
      } catch (error) {
        reject(error);
      }
    }, Math.random() + 100);
  });
}

export { sumar, restar, multiplicar, dividir, crearPromesa };
