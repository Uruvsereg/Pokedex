const { Pokemon, Types } = require('../db');
const axios = require('axios');
// const { PKM, PKMbase } = require('../utils/index')

const PKM = (arr) => {
    return arr.prototype.map((element) => {
        return{
            id: element.data.id,
            raza: element.data.name,
            Altura: element.data.height,
            raza: element.species.name,
            Tipo1: element.types[0].type.name,// Tipo1 = PKM.types.slot1.name
            Tipo2: element.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
            Imagen: element.sprites.front_default,
            Vida: element.stats.find(({stat})=> stat.name === "hp").base_stat,
            Ataque: element.stats.find(({stat})=> stat.name === "attack").base_stat,
            AtEsp: element.stats.find(({stat})=> stat.name === "special-attack").base_stat,
            Defensa: element.stats.find(({stat})=> stat.name === "defense").base_stat,
            DeEsp: element.stats.find(({stat})=> stat.name === "special-defense").base_stat,
            Velocidad: element.stats.find(({stat})=> stat.name === "speed").base_stat,
            Altura: element.stats.find(({stat})=> stat.name === "hp").base_stat,
            Peso: element.weight
        }
    })
}

const PKMbase = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('El objeto no es un arreglo');
    }
    return array.map((element) => {
        return {
            raza: element.species.name,
            Imagen: element.sprites.front_default,
            Tipo1: element.types[0].type.name,// Tipo1 = PKM.types.slot1.name
            Tipo2: element.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
        };
    });
};

const getPokemons = async () => {
    const PKbd = await Pokemon.findAll();
    const PKapi = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data;
    const pkapi = PKapi.results;
    // const PKA = PKMbase(PKapi);
    // const PKBD = PKMbase(PKbd);
    return [...pkapi,...PKbd];
}

const PokeID = async (id, lugar) => {
    const PKMon = (lugar === 'api') ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data : await Pokemon.findByPK(id);
    // const Poke = PKM(PKMon);
    return PKMon;
    // if(lugar === 'api'){
        // const PKM = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).data
    // }
    // else{
        // await Pokemon.findByPK(id);
    // }
}

const BuscaNombres = async (name) => {
    const nombres = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
    const Pokefil = PKMbase(nombres)
    const PokefiltroApi = Pokefil.filter(pokemon => pokemon.name === name)
    // const PKMnombre = PKM(nombres);
    // const pokeFapi = PKMnombre.filter(pokemon => pokemon.name === nombre);
    // const pokeFbd = await Pokemon.findAll({where: {raza: nombre}});
    // const pokefiltro = [...pokeFapi,...pokeFbd]
    return PokefiltroApi;
}

const PokeNew = async(id, Raza, Imagen, /*Tipo1, Tipo2,*/ Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
    return await Pokemon.create({id, Raza, Imagen, /*Tipo1, Tipo2,*/ Vida, Ataque, Defensa, Velocidad, Altura, Peso});
};

const getTipos = async () => {

}

module.exports = {getPokemons, PokeID, BuscaNombres, PokeNew, getTipos};