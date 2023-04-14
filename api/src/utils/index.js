const PKM = (arr) => {
    return arr.prototype.map(pokemon => {
        return{
            id: pokemon.data.id,
            raza: pokemon.data.name,
            Altura: pokemon.data.height,
            raza: pokemon.species.name,
            Tipo1: pokemon.types[0].type.name,// Tipo1 = PKM.types.slot1.name
            Tipo2: pokemon.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
            Imagen: pokemon.sprites.front_default,
            Vida: pokemon.stats.find(({stat})=> stat.name === "hp").base_stat,
            Ataque: pokemon.stats.find(({stat})=> stat.name === "attack").base_stat,
            AtEsp: pokemon.stats.find(({stat})=> stat.name === "special-attack").base_stat,
            Defensa: pokemon.stats.find(({stat})=> stat.name === "defense").base_stat,
            DeEsp: pokemon.stats.find(({stat})=> stat.name === "special-defense").base_stat,
            Velocidad: pokemon.stats.find(({stat})=> stat.name === "speed").base_stat,
            Altura: pokemon.stats.find(({stat})=> stat.name === "hp").base_stat,
            Peso: pokemon.weight
        }
    })
}

const PKMbase = (array) => {
    array.map(pokemon => {
        return{
            raza: pokemon.species.name,
            Imagen: pokemon.sprites.front_default,
            Tipo1: pokemon.types[0].type.name,// Tipo1 = PKM.types.slot1.name
            Tipo2: pokemon.types[1]?.type.name,// Tipo2 = PKM.types.slot2.name
        }
    })
}

module.exports = {
    PKM,
    PKMbase
}