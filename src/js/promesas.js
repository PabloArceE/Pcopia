import { items } from './baseDeDatos';

export const buscarItemPromesa = (id) => {

    const item = items[id]

    return new Promise((fullfiled, reject) => {

        (item) ? fullfiled(item) : reject(`No existe el item con el id: ${id}`);

    });
}