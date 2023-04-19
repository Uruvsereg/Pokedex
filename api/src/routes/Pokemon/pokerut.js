const {Router} = require('express');
const { HandlerPoke, HandlerPokemon, HandlerPokeTipos, PokeNuevo} = require('../handlers/pkhandl');

const PokeRu = Router();

PokeRu.get('/', HandlerPoke);

PokeRu.get('/:id', HandlerPokemon);

PokeRu.post('/pokenuevo', PokeNuevo);

PokeRu.get('/tipos', HandlerPokeTipos);

module.exports = PokeRu;