const {Router} = require('express');
// const PokePut = require('./PokePut');
// const PokeGet = require('./PokeGet');
// const PokePost = require('./PokePost');
const { HandlerPoke, HandlerPokemon, HandlerPokeName, HandlerPokeTipos, PokeNuevo} = require('../handlers/pkhandl');

const PokeRu = Router();

PokeRu.get('/', HandlerPoke);

PokeRu.get('/:id', HandlerPokemon);

PokeRu.post('/pokenuevo', PokeNuevo);

PokeRu.get('/tipos', HandlerPokeTipos);

module.exports = PokeRu;