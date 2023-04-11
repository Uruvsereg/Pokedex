const { Router } = require('express');
const { agregar, getPokemon, getPokemons, getXNombre, getTipos } = require('../controllers/controladores');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//arreglo de objetos, pokemon con su info
router.get('/pokemons'), async (req, res) => { 
    try {
        
    }
    catch (error) {
        
    }
}

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