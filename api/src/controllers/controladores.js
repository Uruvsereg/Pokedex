const { Pokemon, Types } = require('../db');
const axios = require('axios');
// const { PKM, PKMbase } = require('../utils/index')

// const PKM = async (arr) => {
//     // return arr.prototype.map((element) => {
//     //     return{
//     //         id: element.data.id,
//     //         raza: element.data.name,
//     //         Altura: element.data.height,
//     //         raza: element.species.name,
//     //         Tipo1: element.types[0].type.name,// Tipo1 = PKM.types.slot1.name
//     //         Tipo2: element.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
//     //         Imagen: element.sprites.front_default,
//     //         Vida: element.stats.find(({stat}) => stat.name === "hp").base_stat,
//     //         Ataque: element.stats.find(({stat}) => stat.name === "attack").base_stat,
//     //         AtEsp: element.stats.find(({stat}) => stat.name === "special-attack").base_stat,
//     //         Defensa: element.stats.find(({stat}) => stat.name === "defense").base_stat,
//     //         DeEsp: element.stats.find(({stat}) => stat.name === "special-defense").base_stat,
//     //         Velocidad: element.stats.find(({stat}) => stat.name === "speed").base_stat,
//     //         Altura: element.stats.find(({stat}) => stat.name === "hp").base_stat,
//     //         Peso: element.weight
//     //     }
//     // })
//     let Pokemones = []
//     for (const elemento of arr) {
//         const URLinfo = await axios.get(`${elemento}`);
//         const {id, name, height, weight, sprites, stats} = URLinfo.data;
//         const pokemon = {
//             id: id,
//             raza: name,
//             Imagen: sprites.front_default,
//             Vida: stats.find(({stat}) => stat.name === "hp").base_stat,
//             Ataque: stats.find(({stat}) => stat.name === "attack").base_stat,
//             AtEsp: stats.find(({stat}) => stat.name === "special-attack").base_stat,
//             Defensa: stats.find(({stat}) => stat.name === "defense").base_stat,
//             DeEsp: stats.find(({stat}) => stat.name === "special-defense").base_stat,
//             Velocidad: stats.find(({stat}) => stat.name === "speed").base_stat,
//             Altura: height,
//             Peso: weight
//         };
//         Pokemones.push(pokemon);
//     }
//     return Pokemones;
// }

// const PKMbase = (array) => {
//     const P = () => (array.map((element) => {
//         return {
//             raza: element.name,
//             Imagen: element.sprites.front_default,
//             Tipo1: element.types[0].type.name,// Tipo1 = PKM.types.slot1.name
//             Tipo2: element.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
//         };
//     }));
//     return P
// };

const getPokemons = async () => { //listo
    const PKbd = await Pokemon.findAll();
    const PKapi = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data;//usar limit=${50}
    const pkapi = PKapi.results;
    const URL = pkapi.map((element) => {
        const url = element.url
        return url;
    });
    let Pokemones = []
    for (const elemento of URL) {
        const URLinfo = await axios.get(`${elemento}`);
        const { id, name, sprites, types} = URLinfo.data;
        const pokemon = {
            id: id,
            raza: name.charAt(0).toUpperCase()+name.slice(1),
            Imagen: sprites.front_default,
            Tipo1: types[0].type.name.charAt(0).toUpperCase()+types[0].type.name.slice(1),
            Tipo2: types[1]?.type.name.charAt(0).toUpperCase()+types[1]?.type.name.slice(1)
        };
        Pokemones.push(pokemon);
    }
    return [...Pokemones, ...PKbd];
}

const PokeID = async (id, lugar) => {// CASI LISTO
    const PKMon = (lugar === 'api') ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)) : await Pokemon.findByPK(id);
    const dataP = PKMon.data;
    const PokemoN = {
        id: dataP.id,
        raza: dataP.name,
        Imagen: dataP.sprites.front_default,
        Tipo1: dataP.types[0].type.name.charAt(0).toUpperCase()+dataP.types[0].type.name.slice(1),
        Tipo2: dataP.types[1]?.type.name.charAt(0).toUpperCase()+dataP.types[1]?.type.name.slice(1),
        Vida: dataP.stats.find(({stat}) => stat.name === "hp").base_stat,
        Ataque: dataP.stats.find(({stat}) => stat.name === "attack").base_stat,
        AtEsp: dataP.stats.find(({stat}) => stat.name === "special-attack").base_stat,
        Defensa: dataP.stats.find(({stat}) => stat.name === "defense").base_stat,
        DeEsp: dataP.stats.find(({stat}) => stat.name === "special-defense").base_stat,
        Velocidad: dataP.stats.find(({stat}) => stat.name === "speed").base_stat,
        Altura: dataP.height,
        Peso: dataP.weight
    };
    return PokemoN;
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