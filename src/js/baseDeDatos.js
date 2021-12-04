// En este archivo se encuentran los datos a los que accederán las funciones callback, simulando una base de datos no relacional como lo es MongoDB o FireDataBase, ordenando la información en llaves-valor
// En este caso item1, item2, etc son las llaves y el contenido en forma de objeto literal es el valor.

export const items = {
    item1:{
        nombre: 'Artículo número 1',
        caracteristicas: 'Características del artículo 1'
    },
    item2:{
        nombre: 'Artículo número 2',
        caracteristicas: 'Características del artículo 2'
    },
    item3:{
        nombre: 'Artículo número 3',
        caracteristicas: 'Características del artículo 3'
    }
}

// esta función recibe dos argumentos, el id de un objeto literal perteneciente a una base de datos y una función callback que toma como argumento el objeto que se obtubo con el id, esta función callback puede ser cualquier función.

export const buscarItemCallback = (id, callback) => {

    const item = items[id];

    (item) ? callback(null, item) : callback(`No existe un item con el id ${id}`);

}

// Argumentos estándars de los callbacks se agrega el manejo de errores 