const validations = (pokeData) => {
//     useEffect(({pokeData}) => {
//         const Raza = pokeData.Raza; 
//         // validateName();
//       }, [pokeData.Raza]);
//     // const Razas = await PKMN(pokeData.Raza)
    let errors={}
    if(!pokeData.Raza){
        errors.raza='La raza no debe estar vacía';
    }
    if(pokeData.Raza.length<4||pokeData.Raza.length>20){
        errors.raza='La raza debe contener entre 4 y 20 caracteres';
    }
    if(pokeData.Raza==Razas()){
        errors.raza='Esta raza ya existe';
    }
    if(!pokeData.Imagen){
        errors.imagen='La imagen debe ser agregada';
    }
    if(!pokeData.Tipo1){
        errors.tipo1='Todo pokemon debe contar con mínimo 1 tipo';
    }
    if(pokeData.Tipo2===pokeData.Tipo1){
        errors.tipo='El tipo secundario no puede ser igual al principal';
    }
    if(!pokeData.Vida){
        errors.vida='Campo obligatirio';
    }
    if(pokeData.Vida<1||pokeData.Vida>255){
        errors.vida='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Ataque){
        errors.ataque='Campo obligatirio';
    }
    if(pokeData.Ataque<1||pokeData.Ataque>255){
        errors.ataque='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Ataqueespecial){
        errors.ataqueespecial='Campo obligatirio';
    }
    if(pokeData.Ataqueespecial<1||pokeData.Ataqueespecial>255){
        errors.ataqueespecial='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Defensa){
        errors.defensa='Campo obligatirio';
    }
    if(pokeData.Defensa<1||pokeData.Defensa>255){
        errors.defensa='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Defensaespecial){
        errors.defensaespecial='Campo obligatirio';
    }
    if(pokeData.Defensaespecial<1||pokeData.Defensaespecial>255){
        errors.defensaespecial='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Velocidad){
        errors.velocidad='Campo obligatirio';
    }
    if(pokeData.Velocidad<1||pokeData.Velocidad>255){
        errors.velocidad='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Altura){
        errors.altura='Campo obligatirio';
    }
    if(pokeData.Altura<1||pokeData.Altura>255){
        errors.altura='Este valor debe estar entre 1 y 255';
    }
    if(!pokeData.Peso){
        errors.peso='Campo obligatirio';
    }
    if(pokeData.Peso<1||pokeData.Peso>255){
        errors.peso='Este valor debe estar entre 1 y 255';
    }
    return errors;
}
// export default validations;
// /*
// if(pokeData.){
//     errors.='';
// }
// */