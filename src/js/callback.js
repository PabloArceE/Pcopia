// Una función callback es una función que se pasa a otra como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    let nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

// El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.
// Sin embargo, hay que tener en cuenta que las callbacks a menudo se utilizan para continuar la ejecución del código después de que se haya completado una operación asíncrona - estas se denominan devoluciones de llamada asincónicas (async callbacks).
// Por ejemplo puede ser una aplicación que utiliza la API de Google Maps y la API de geolocalización para mostrar en un mapa la ubicación actual del un dispositivo movil.


// Ejemplo de argumentos de una función utilizadas en una función callback 
function calcular(num1, num2, callback ){
    return callback(num1, num2);
}

function calcProducto(num1, num2){
    return num1 * num2;
}

function calcSuma(num1, num2){
    return num1 + num2; 
}

console.log(calcular(5, 3, calcProducto));
console.log(calcular(5, 3, calcSuma));



// 