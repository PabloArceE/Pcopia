import './style.css';
import { buscarItemCallback, items } from './js/baseDeDatos';
import { buscarItemPromesa } from './js/promesas';
import { promiseLenta, promiseMedia, promiseRapida } from './js/promiseRace';

// La función buscarItem recibe dos argumentos, el id de un objeto de una base de datos y una función callback que en este caso nos indica de la existencia o no del objeto en la base de datos.
// Haciendo uso de los argumentos standars de los callbacks lo primero que reciben estas funciones son un error y luego el argumento que se necesita utilizar.

const itemId1 = 'item1';
const itemId2 = 'item2';
const itemId3 = 'item10';

// este operador ternario es utilizado para que en caso de que exista un error desde la base de datos, se imprima en consola y si no se imprima el objeto que en este caso es un es un item.

// buscar un item en una base de datos con una función callback
buscarItemCallback(itemId1, (err, item)=>{
    (err) ? console.error(err) : console.log(item);
});

// buscar un item en una base de datos con promesas sin manejo de errores
buscarItemPromesa(itemId1).then(item => {
    
    console.log(`Almacenando ${item.nombre} en stock`);

});

// buscar varios items en una base de datos con Promise.all() recibe un array [] que puede contener cualquier tipo de dato icluso promesas que se resuelven y luego ejecuta un .then() para ejecutar una función si no hay excepciones, un .catch() para manejo de errores y un .finally().
// en .then() se utiliza la desestructuración del arreglo ingresado como argumento en el .all() para poder emplear los resultados de las promesas en las funciones dentro de este bloque.
Promise.all([ buscarItemPromesa(itemId1), buscarItemPromesa(itemId2) ])
  .then( ([item1, item2]) => {

    console.log(`Almacenando el ${item1.nombre} y el ${item2.nombre} en stock`);  

}).catch( err => {

    console.error(`Se intentó buscar un item con un Id inválido por lo que el bloque catch del Promise se ejecuta al momento que se produce una exepción`)

    alert(err);

}).finally(() => {
    console.warn(`Fin del Promise continual la ejecución del programa...`)
})


// Comienzo del ejercicio Promise.race()
Promise.race([promiseRapida, promiseLenta, promiseMedia])
    .then(console.log)
    .catch(console.error)

