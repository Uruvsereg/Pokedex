import style from './filtros.module.css'
import React from "react";

export const filtros = (onChange) =>{
    return(
        <select className={style.select}
        value={pokemon}
        onChange = {(event) =>{
            switch(event.target.value){
                case 'Debil':
                    return onChange({pokemon:'Ataque', order: 'ascending'});
                case 'Fuerte':
                    return onChange({pokemon:'Ataque', order: 'descending'});
                case 'a-z':
                    return onChange({pokemon:'name', order: 'ascending'});
                case 'z-a':
                    return onChange({pokemon:'name', order: 'descending'});
                default:
                    return onChange({})
            }}}
        >
            <option value="" disabled selected> Ordenar por  </option>
            <option value="Debil"> Más debil primero </option>
            <option value="highest"> Más fuerte primero </option>
            <option value="a-z"> A-Z </option>
            <option value="z-a"> Z-A </option>
        </select>
    )
}