const validations = (userData) => {
    let errors={}
    if(!/^[a-zA-Z0-9._%+\-!#$&'*\/=?^`{|}~]{1,64}@(hotmail|outlook|gmail|yahoo)\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(userData.correo)){
        errors.correo = 'correo inválido';
        return;
    }
    if(!userData.nombre){
        errors.nombre = 'El nombre no puede estar vacío';
        return;
    }
    if(!userData.apellido){
        errors.apellido = 'El apellido no puede estar vacío';
        return;
    }
    if(!userData.nickname){
        errors.nickname = 'El Nickname no puede estar vacío';
        return;
    }
    if(!/^[a-zA-Z0-9]{3,15}$/.test(userData.nickname)){
        errors.nickname = 'El Nicname solo puede contener números y letras';
        return;
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/.test(userData.password)){
        errors.password = 'La contraseña debe contener entre 6 y 15 caracteres, y como mínimo: 1 mayúcula, 1 minúscula, 1 número y 1 caracter especial';
        return;
    }
    if(userData.password !== userData.passwordc){
        errors.password = 'Las contraseñas no coinciden';
        return;
    }
    return errors;
}
export default validations;