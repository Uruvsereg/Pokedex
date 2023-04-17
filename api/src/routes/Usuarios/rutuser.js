const {Router} = require('express');
// const GetUsu = require('./getusu');
// const PostUsu = require('./postusu');
const {HandlerGetUs, HandleGetUsu, HandlerGetTeam, HandlerGetCard, NuevoUsuHandler} = require('../handlers/ushandl');

const RutUs = Router();

// RutUs.use('get',GetUsu);
// RutUs.use('post',PostUsu);

RutUs.get('/:id', HandlerGetUs);

RutUs.get('/:id/equipo', HandlerGetTeam);

RutUs.get('/:id/carnet', HandlerGetCard);

RutUs.post('/registro', NuevoUsuHandler);

module.exports = RutUs;