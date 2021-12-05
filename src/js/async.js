// La declaración de una fución async define una función asíncrona, la cual devuelve un objeto de tipo AsyncFunction.
// Cuando se llama a una función asyncm esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.
import { items } from './baseDeDatos'

export const buscarItemAsync = async(id) => {

    const item = items[id];

    if(item){

        return item; 
        
    }else{
        
        throw `No existe el item con el id: ${id}`;
    } 

}