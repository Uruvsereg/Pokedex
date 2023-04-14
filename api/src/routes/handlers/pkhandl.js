const { PokeNew, getTipos, PokeID, BuscaNombres, getPokemons } = require('../../controllers/controladores')

//arreglo de objetos, pokemon con su info
const HandlerPoke = async (_req, res) => {
    try {
        const response = await getPokemons()
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}

/* aquí va cuando se solicitan diferentes datos de si es numérico o literal
const fuente = isNaN(id) ? "dBD" : "api"//is not a number
if(id)
*/

//detalle pokemon especifico, id por parámetro, API+BD------1010 pokemones en la api
const HandlerPokemon = async (req, res) => {
    const {id} = req.params;
    const lugar = (id >= 1 || id <= 1010) ? 'api' : 'BD'//revisa si el origen es de la base de datos o de la api
    try {
        const response = await PokeID (id, lugar/*id, lugar/*id.id, id.nombre, id.imagen, id.vida, id.ataque, id.defensa, id.velocidad, id.altura, id.peso*/);
        res.status(200).json(response);
    }
    catch (error) { 
        res.status(400).json({error:error.message})
    }
}

//obtener pokemons que coincidan con query, not casesensitive, API+BD
const HandlerPokeName = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const PkAll = await BuscaNombres(name)
            res.status(200).json(PkAll);
        }
        else{
            const response = await getPokemons();
            res.status(200).json(response)
        }
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
    res.status(200).send('Llegué a la ruta nombres')
}

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