const { Router } = require('express');
const { axios } = require('axios');
const { agregar, getPokemon, getPokemons, getXNombre, getTipos } = require('../controllers/controladores');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//arreglo de objetos, pokemon con su info
router.get('/pokemons', (req, res) => {
    res.status(200).send('Llegué a la ruta pokemons')
})

//detalle pokemon especifico, id por parámetro, API+BD
router.get('/pokemons/:id'), async (req, res) => { 
    try {
        
    }
    catch (error) { 
        
    }
}

//obtener pokemons que coincidan con query, not casesensitive, API+BD
router.get('/pokemons/{name}'), async (req, res) => {
    try {
        function buscanombres(nombre, buscar){//sirve para buscar cpoincidencias
            for(let j=0;j<nombre.length;j++){
                for(let u=0;u<buscar.length;u++){
                    if (frase[j+u] === buscar[u]){
                        if(u === buscar.length -1) return j;
                    }else break;
                }
            }
            return -1;
        }
    }
    catch (error) {
        
    }
}

//crear pokemon, info recibida por body
router.get('/pokemons'), async (req, res) => {
    try {
        
    }
    catch (error) {
        
    }
}

//arreglo tipos pokemon, sin hardcodeo
router.get('/types'), async (req, res) => {
    try {
        
    }
    catch (error) {
        
    }
}

module.exports = router;


/* 
function buscanombres(nombre, buscar){//sirve para buscar cpoincidencias
    for(let j=0;j<nombre.length;j++){
        for(let u=0;u<buscar.length;u++){
            if (frase[j+u] === buscar[u]){
                if(u === buscar.length -1) return j;
            }else break;
        }
    }
    return -1;
}
*/