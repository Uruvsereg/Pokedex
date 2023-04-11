const { Pokemon, Types } = require('../db');

const agregar = async (id) =>{
//1010pokemones en la api
    if(id >= 1 || id <= 1010){
        try {let PKM = await X(id)
            if(PKM){
                const Nombre = poke.stats
                const Tipo1 = poke.types[0].type.name
                const Tipo2 = poke.types[1]?.type.name
                // const Imagen = poke.stats
                // const Vida = poke.stats
                // const Ataque = poke.stats
                // const Defensa = poke.stats
                // const Velocidad = poke.stats
                // const Altura = poke.stats
                // const Peso = poke.stats
                return {id, Nombre, Tipo1, Tipo2, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso}
            }    
        }
        catch (error) {
            throw new Error ('Este pokemon no existe, intenta con un id entre 1 y 1010');
        }
    }
}
const getPokemon = async () =>{

}
const getPokemons = async () =>{

}
const getXNombre = async () =>{

}
const getTipos = async () =>{

}

module.exports = {agregar, getPokemon, getPokemons, getXNombre, getTipos};