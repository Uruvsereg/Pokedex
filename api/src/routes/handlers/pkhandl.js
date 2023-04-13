const { PokeNew, getTipos } = require('../../controllers/controladores')

//crear pokemon, info recibida por body
const PokeNuevo = async(req, res) => {
    const {id, Raza, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso} = req.body;

    try {
        const response = await PokeNew(id, Raza, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso);
        res.status(200).json(response)
    }
    catch (error) {
        res.status(404).json({error:error.message})
    }
}

// const

//arreglo de objetos, pokemon con su info
const HandlerPoke = (req, res) => {
    try {
        const response = await ({id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso});
        res.status(200).json(response);
    }
    catch (error) { 
        res.status(400).json({error:error.message})
    }
    res.status(200).send('Llegué a la ruta pokemons')
}

// const

//detalle pokemon especifico, id por parámetro, API+BD
const HandlerPokemon = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await (id.id, id.nombre, id.imagen, id.vida, id.ataque, id.defensa, id.velocidad, id.altura, id.peso);
        res.status(200).json(response);
    }
    catch (error) { 
        res.status(400).json({error:error.message})
    }
    res.status(200).send('Llegué a la ruta pokemons por id')
}

// const

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

// const

//arreglo tipos pokemon, sin hardcodeo
const HandlerPokeTipos = async(req, res) => {
    res.status(200).send('Llegué a la ruta tipos')
    // try {
        // const response = await getTipos(tipos)
        // res.status(200).json(response);
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


/*Pokemon de prueba
{
    "id": 1011,
    "Raza": "Uruloke",
    "Imagen": "asdasfadfdsfas",
    "Vida": "10000",
    "Ataque": "9999",
    "Defensa": "8999",
    "Velocidad": "10000",
    "Altura": "172",
    "Peso": "300"
}
*/