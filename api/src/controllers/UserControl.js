const {Usuario} = require('../db');

const NewUsuario = async(nombre, apellido, correo, nickname, password) => {
    return await Usuario.create({nombre, apellido, correo, nickname, password});
};

// const acceso = (nickname, password) => {

// }

module.exports = {
    NewUsuario,
    // acceso
}

/* Usuario de prueba
{
    "nombre": "Julián",
    "apellido": "González",
    "correo": "uru@gmail.com",
    "nickname": "uruvsereg",
    "password": "juli12345"
}
 */