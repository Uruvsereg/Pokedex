const { GetPokemons, PokeID, BuscaNombres, PokeNew, GetTipos } = require('../../controllers/controladores')

//arreglo de objetos, pokemon con su info
const HandlerPoke = async (req, res) => {
    try {
        const response = await GetPokemons();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}
/* aquí va cuando se solicitan diferentes datos de si es numérico o literal
const fuente = isNaN(id) ? "dBD" : "api"//is not a number
if(id)
Detalle pokemon especifico, id por parámetro, API+BD------1010 pokemones en la api
*/
const HandlerPokemon = async (req, res) => {
    const {id} = req.params;
    const {name} =req.query;
    const lugar = (id >= 1 || id <= 1010) ? 'api' : 'BD'//revisa si el origen es de la base de datos o de la api
    if(lugar === 'api'){
        try {
            const response = await PokeID (id, lugar/*id, lugar/*id.id, id.nombre, id.imagen, id.vida, id.ataque, id.defensa, id.velocidad, id.altura, id.peso*/);
            res.status(200).json(response);
        }
        catch (error) { 
            res.status(400).json({error:error.message})
        }
    }
    else{
        try {
            if(name){
                let h = 'hola'
                console.log(h);
                const PkAll = await BuscaNombres(name)
                res.status(200).json(PkAll);
            }
            else{
                // const response = await getPokemons();
                // res.status(200).json(response)
                console.log('No se encontró este pokemon');
            }
        }
    catch (error) {
        res.status(400).json({error:error.message});
    }
    }
}
const PokeNuevo = async(req, res) => {//funciona
    const pokemon = req;
    const {id, Raza, Imagen, Tipo1 , Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso} = req.body;
    try {
        const response = await PokeNew(id, Raza, Imagen, Tipo1 , Tipo2, Vida, Ataque, Ataqueespecial, Defensa, Defensaespecial, Velocidad, Altura, Peso);
        res.status(200).json(response)
    }
    catch (error) {
        const validnamebd = await PokeTodos.find({where:{Raza:pokemon.name.toLowerCase()}});
        const validnameapi = await BuscaNombres (pokemon.name.toLowerCase());
        if(validnamebd||validnameapi){
            throw new Error ('El esta raza pokemon ya existe');
        }
        res.status(404).json({error:error.message})
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