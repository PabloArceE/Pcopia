// Este ejercicio permite analizar el funcionamiento del método Promise.race()
// El Promise.race() recibe un array de Promises() y devuelve el resultado del que se resuelva más rápido, el factor es la vélocida a la que se resuelve, esto implica que el resultado que se devuelve puede ser el bloque fullfiled o el rejected, el resultado del .then(), del .catch() y/o del .finally().

const promiseLenta = new Promise((fullfiled, rejected) => {

    setTimeout(() => fullfiled('Promesa Lenta'), 2000);

})

const promiseMedia = new Promise((fullfiled, rejected) => {

    setTimeout(() => fullfiled('Promesa Media'), 1500);

})

const promiseRapida = new Promise((fullfiled, rejected) => {

    setTimeout(() => fullfiled('EL PROMISE.RACE DEVOLVIÓ EL RESULTADO DEL PROMISE MÁS RÁPIDO EL QUE SE EJECUTA EN MENOS TIEMPO'), 1000);
    setTimeout(() => rejected('REJECTED DEL PROMISE MÁS RÁPIDO'), 1500);

})

export {
    promiseLenta,
    promiseMedia,
    promiseRapida
}