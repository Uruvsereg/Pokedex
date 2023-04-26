import style from './XTipos.module.css';
import React from "react";

export const XTipos = ({onChange, Poketodos}) =>{
    return(
        <select className={style.select}
        value={Poketodos}
        onChange = {(event) =>{
            switch(event.target.value){
                case 'Dragon':
                    return onChange({Poketodos:'tipo1'==='Dragon'||'tipo2'==='Dragon'})
                case 'Fuego':
                    return onChange({Poketodos:'tipo1'==='Fuego'||'tipo2'==='Fuego'})
                case 'Lucha':
                    return onChange({Poketodos:'tipo1'==='Lucha'||'tipo2'==='Lucha'})
                case 'Volador':
                    return onChange({Poketodos:'tipo1'==='Volador'||'tipo2'==='Volador'})
                case 'Veneno':
                    return onChange({Poketodos:'tipo1'==='Veneno'||'tipo2'==='Veneno'})
                case 'Tierra':
                    return onChange({Poketodos:'tipo1'==='Tierra'||'tipo2'==='Tierra'})
                case 'Roca':
                    return onChange({Poketodos:'tipo1'==='Roca'||'tipo2'==='Roca'})
                case 'Insecto':
                    return onChange({Poketodos:'tipo1'==='Insecto'||'tipo2'==='Insecto'})
                case 'Fantasma':
                    return onChange({Poketodos:'tipo1'==='Fantasma'||'tipo2'==='Fantasma'})
                case 'Acero':
                    return onChange({Poketodos:'tipo1'==='Acero'||'tipo2'==='Acero'})
                case 'Agua':
                    return onChange({Poketodos:'tipo1'==='Agua'||'tipo2'==='Agua'})
                case 'Planta':
                    return onChange({Poketodos:'tipo1'==='Planta'||'tipo2'==='Planta'})
                case 'Electrico':
                    return onChange({Poketodos:'tipo1'==='Electrico'||'tipo2'==='Electrico'})
                case 'Psiquico':
                    return onChange({Poketodos:'tipo1'==='Psiquico'||'tipo2'==='Psiquico'})
                case 'Hielo':
                    return onChange({Poketodos:'tipo1'==='Hielo'||'tipo2'==='Hielo'})
                case 'Siniestro':
                    return onChange({Poketodos:'tipo1'==='Siniestro'||'tipo2'==='Siniestro'})
                case 'Hada':
                    return onChange({Poketodos:'tipo1'==='Hada'||'tipo2'==='Hada'})
                case 'Normal':
                    return onChange({Poketodos:'tipo1'==='Normal'||'tipo2'==='Normal'})
                default:
                    return onChange({})
            }}}
        >
            <option value="" disabled selected> Ordenar por  </option>
            <option value="Dragon"> Dragon </option>
            <option value="Fuego"> Fuego </option>
            <option value="Lucha"> Lucha </option>
            <option value="Volador"> Volador </option>
            <option value="Veneno"> Veneno </option>
            <option value="Tierra"> Tierra </option>
            <option value="Roca"> Roca </option>
            <option value="Insecto"> Insecto </option>
            <option value="Fantasma"> Fantasma </option>
            <option value="Acero"> Acero </option>
            <option value="Agua"> Agua </option>
            <option value="Planta"> Planta </option>
            <option value="Electrico"> Electrico </option>
            <option value="Psiquico"> Psiquico </option>
            <option value="Hielo"> Hielo </option>
            <option value="Siniestro"> Siniestro </option>
            <option value="Hada"> Hada </option>
            <option value="Normal"> Normal </option>
        </select>
    )
}