const { Pokemon, Types } = require('../db');
const axios = require('axios');
// const { PKM, PKMbase } = require('../utils/index')

//https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010      url de todos los pokemons de la api, al probarlo rompió la app

const GetPokemons = async () => { //listo
    // const PKapi=[]
    // for(let j=0; j<=10; j++){
    //     const PKapi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${j}`)).data;
    //     console.log(PKapi);
    //     PKapi.push(PKapi)
    // }
    const PKbd = await Pokemon.findAll();
    const PKapi = (await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)).data;
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
    const PKMon = lugar === "api" ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data : await Pokemon.findiByPk(id);
    const Pokemon = {
        id: PKMon.id,
        raza: PKMon.name,
        Imagen: PKMon.sprites.front_default,
        Tipo1: PKMon.types[0].type.name.charAt(0).toUpperCase()+PKMon.types[0].type.name.slice(1),
        Tipo2: PKMon.types[1]?.type.name.charAt(0).toUpperCase()+PKMon.types[1]?.type.name.slice(1),
        Vida: PKMon.stats.find(({stat}) => stat.name === "hp").base_stat,
        Ataque: PKMon.stats.find(({stat}) => stat.name === "attack").base_stat,
        Ataqueespecial: PKMon.stats.find(({stat}) => stat.name === "special-attack").base_stat,
        Defensa: PKMon.stats.find(({stat}) => stat.name === "defense").base_stat,
        Defensaespecial: PKMon.stats.find(({stat}) => stat.name === "special-defense").base_stat,
        Velocidad: PKMon.stats.find(({stat}) => stat.name === "speed").base_stat,
        Altura: PKMon.height,
        Peso: PKMon.weight
    };
    return Pokemon;
    // if(lugar === 'api'){
        // const PKMon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).data
    // }
    // else{
        // const PKMon = await Pokemon.findByPk(id);
    // }
}

const BuscaNombres = async (name) => {
    const nombre = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(nombre){
        const pokemon = nombre.data;
        const PokemoN = {
            id: pokemon.id,
            Raza: pokemon.name,
            Imagen: pokemon.sprites.front_default,
            Tipo1: pokemon.types[0].type.name.charAt(0).toUpperCase()+pokemon.types[0].type.name.slice(1),
            Tipo2: pokemon.types[1]?.type.name.charAt(0).toUpperCase()+pokemon.types[1]?.type.name.slice(1),
            Vida: pokemon.stats.find(({stat}) => stat.name === "hp").base_stat,
            Ataque: pokemon.stats.find(({stat}) => stat.name === "attack").base_stat,
            AtEsp: pokemon.stats.find(({stat}) => stat.name === "special-attack").base_stat,
            Defensa: pokemon.stats.find(({stat}) => stat.name === "defense").base_stat,
            DeEsp: pokemon.stats.find(({stat}) => stat.name === "special-defense").base_stat,
            Velocidad: pokemon.stats.find(({stat}) => stat.name === "speed").base_stat,
            Altura: pokemon.height,
            Peso: pokemon.weight
        };
        return PokemoN;
    }
}

const PokeNew = async(id, Raza, Imagen, Tipo1, Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso) => {
    return await Pokemon.create({id, Raza, Imagen, Tipo1, Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso}); 
};

const GetTipos = async () => {
    try {
        const pokeTipos = await Types.findAll();
        return pokeTipos;
    }
    catch (error) {
        throw error
    }
}

module.exports = {GetPokemons, PokeID, BuscaNombres, PokeNew, GetTipos};


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