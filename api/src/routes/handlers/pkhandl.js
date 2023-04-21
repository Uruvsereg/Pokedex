const { GetPokemons, PokeID, BuscaNombres, PokeNew, GetTipos } = require('../../controllers/controladores')

//arreglo de objetos, pokemon con su info
const HandlerPoke = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const PkAll = await BuscaNombres(name)
            res.status(200).json(PkAll);
        }
        else{
            const response = await GetPokemons();
            res.status(200).json(response)
        }
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}
/* Detalle pokemon especifico, id por parámetro, API+BD------1010 pokemones en la api*/
const HandlerPokemon = async (req, res) => {
    const {id} = req.params;
    const lugar = isNaN(id) ? "BD" : "api"//revisa si el origen es de la base de datos o de la api
    try {
        const response = await PokeID (id, lugar);
        res.status(200).json(response);
    }
    catch (error) { 
        res.status(400).json({error:error.message})
    }
}
const PokeNuevo = async(req, res) => {//funciona
    // const pokemon = req;
    const {id, Raza, Imagen, Tipo1 , Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso} = req.body;
    try {
        const response = await PokeNew(id, Raza, Imagen, Tipo1 , Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso);
        res.status(200).json(response)
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}
//arreglo tipos pokemon, sin hardcodeo
const HandlerPokeTipos = async() => {
    try {
        const response = await GetTipos()
        res.status(200).json(response);
    }
    catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    HandlerPoke,
    HandlerPokemon,
    PokeNuevo,
    HandlerPokeTipos
}
/*
{
    "id": 1011,
    "Raza": "Uruloke",
    "Imagen": "asdasdqweqdfasf",
    "Tipo1": "Dragon",
    "Tipo2": "Fuego",
    "Vida": 255,
    "Ataque": 255,
    "Ataqueespecial": 255,
    "Defensa": 255,
    "Defensaespecial": 255,
    "Velocidad": 255,
    "Altura": 255,
    "Peso": 255
}
*/