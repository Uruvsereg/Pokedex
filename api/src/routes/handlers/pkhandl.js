//arreglo de objetos, pokemon con su info
const HandlerPoke = (req, res) => {
    res.status(200).send('Llegué a la ruta pokemons')
}
//detalle pokemon especifico, id por parámetro, API+BD
const HandlerPokemon= (req, res) => { 
    res.status(200).send('Llegué a la ruta pokemons por id')
    // try {
        
    // }
    // catch (error) { 
        
    // }
}
//obtener pokemons que coincidan con query, not casesensitive, API+BD
const HandlerPokeName = (req, res) => {
    res.status(200).send('Llegué a la ruta pokemons por nombre')

    // try {
    //     function buscanombres(nombre, buscar){//sirve para buscar cpoincidencias
    //         for(let j=0;j<nombre.length;j++){
    //             for(let u=0;u<buscar.length;u++){
    //                 if (frase[j+u] === buscar[u]){
    //                     if(u === buscar.length -1) return j;
    //                 }else break;
    //             }
    //         }
    //         return -1;
    //     }
    // }
    // catch (error) {
        
    // }
}

//arreglo tipos pokemon, sin hardcodeo
const HandlerPokeTipos = (req, res) => {
    res.status(200).send('Llegué a la ruta tipos')
    // try {
        
    // }
    // catch (error) {
        
    // }
}
//crear pokemon, info recibida por body
const PokeNuevo = (req, res) => {
    res.status(200).send('Llegué a la ruta pokemon')
    // try {
        
    // }
    // catch (error) {
        
    // }
}

module.exports = {
    HandlerPoke,
    HandlerPokemon,
    HandlerPokeName,
    HandlerPokeTipos,
    PokeNuevo
}