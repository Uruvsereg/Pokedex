const { Pokemon, Types } = require('../db');

const PokeNew = async(id, Raza, Imagen, /*Tipo1, Tipo2,*/ Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
    return await Pokemon.create({id, Raza, Imagen, /*Tipo1, Tipo2,*/ Vida, Ataque, Defensa, Velocidad, Altura, Peso});
};

const agregar = async (id) =>{
//1010pokemones en la api
    if(id >= 1 || id <= 1010){
        try {let PKM = await X(id)
            if(PKM){
                const Raza = PKM.species.name
                const Tipo1 = PKM.types[0].type.name// const Tipo1 = PKM.types.slot1.name
                const Tipo2 = PKM.types[1]?.type.name// const Tipo2 = PKM.types.slot2.name
                const Imagen = PKM.sprites.front_default
                const Vida = PKM.stats.find(({stat})=> stat.name === "hp").base_stat
                const Ataque = PKM.stats.find(({stat})=> stat.name === "attack").base_stat
                const AtEsp = PKM.stats.find(({stat})=> stat.name === "special-attack").base_stat
                const Defensa = PKM.stats.find(({stat})=> stat.name === "defense").base_stat
                const DeEsp = PKM.stats.find(({stat})=> stat.name === "special-defense").base_stat
                const Velocidad = PKM.stats.find(({stat})=> stat.name === "speed").base_stat
                const Altura = PKM.stats.find(({stat})=> stat.name === "hp").base_stat
                const Peso = PKM.weight
                return {id, Raza, Imagen, Tipo1, Tipo2, Vida, Ataque, AtEsp, Defensa, DeEsp, Velocidad, Altura, Peso}
            }    
        }
        catch (error) {
            throw new Error ('Este pokemon no existe, intenta con un id diferente');
        }
    }
}
const getPokeDetail = async () =>{

}
const getPokemons = async () =>{

}
const getXNombre = async () =>{

}
const getTipos = async () =>{

}

module.exports = {PokeNew, agregar, getPokeDetail, getPokemons, getXNombre, getTipos};