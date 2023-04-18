const { PokeNew, getTipos, PokeID, BuscaNombres, getPokemons } = require('../../controllers/controladores')

//arreglo de objetos, pokemon con su info
const HandlerPoke = async (_req, res) => {
    const {name} = req.query;
    try {
        if(name){
            let h = 'hola'
            console.log(h);
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

    try {
        const response = await getPokemons();
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
//crear pokemon, info recibida por body
const PokeNuevo = async(req, res) => {
    const {id , Raza , Imagen , Tipo1 , Tipo2 , Vida , Ataque , AtaqueEspecial , Defensa , DefensaEspecial , Velocidad , Altura , Peso} = req.body;

    try {
        const response = await PokeNew(id , Raza , Imagen , Tipo1 , Tipo2 , Vida , Ataque , AtaqueEspecial , Defensa , DefensaEspecial , Velocidad , Altura , Peso);
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
    HandlerPokeTipos,
    PokeNuevo
}

/*Pokemon de prueba
{
    ":id": 1011,
    ":Raza": "Uruloke",
    ":Imagen": "Dragonn",
    ":Tipo1": "Fire",
    ":Tipo2": "Dragon",
    ":Vida": 100000,
    ":Ataque": 9999,
    ":AtaqueEspecial": 9999,
    ":Defensa": 9999,
    ":DefensaEspecial": 9999,
    ":Velocidad": 9999,
    ":Altura": 172,
    ":Peso": 300
}
*/