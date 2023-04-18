const { NewUsuario } = require("../../controllers/UserControl");

//ruta crear usuario
const NuevoUsuHandler = async(req, res) => {
    const {nombre, apellido, correo, nickname, password} = req.body;

    try {
        const response = await NewUsuario(nombre, apellido, correo, nickname, password);
        res.status(200).json(response)
    }
    catch (error) {
        res.status(404).json({error:error.message})
    }
}
//ruta de perfil específico
const HandlerGetUs = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Llegué a mi perfil, soy el usuario ${id}`);

}
//ruta de perfiles
const HandleGetUsu = (req, res) => {
    res.status(200).send('Llegué a los perfiles de usuario, esto solo debe ser visto por mí');
}
//ruta del equipo del perfil
const HandlerGetTeam = (req,res) => {
    const {id} = req.params;
    res.status(200).send(`Llegué al equipo del usuario ${id}`);
}
//ruta del carnet del perfil
const HandlerGetCard = (req,res) => {
    res.status(200).send('Este es mi certificado, soy un maestro pokemon')
}

module.exports = {
    HandlerGetUs,
    HandleGetUsu,
    HandlerGetTeam,
    HandlerGetCard,
    NuevoUsuHandler
};