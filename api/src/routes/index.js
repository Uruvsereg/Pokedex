const { Router } = require('express');
// const { axios } = require('axios');
// const { agregar, getPokemon, getPokemons, getXNombre, getTipos } = require('../controllers/controladores');
const RutUs = require('./Usuarios/rutuser');
const PokeRu = require('./Pokemon/pokerut');

// Importar todos los routers; Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers Ejemplo: router.use('/auth', authRouter);

router.use('/perfil', RutUs);
router.use('/pokemon', PokeRu);

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