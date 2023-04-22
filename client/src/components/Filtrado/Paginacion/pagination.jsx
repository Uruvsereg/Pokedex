import style from './pagination.module.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Paginacion({cantidad, pactual, setPactual, poketodos}){

    const limite = Math.ceil(poketodos/cantidad);

    const paginas = []
    for(let j=1 ; j<= limite; j++){
        paginas.push(j)
    }

    const primera = () => { setPactual(pactual=1) }
    const anterior = () => { setPactual(pactual-1) }
    const siguiente = () => { setPactual(pactual+1) }
    const ultima = () => { setPactual(pactual=paginas.lenght-1) }
    const especifica = (p) => { setPactual(p) }

    return(
        <nav className={style.navegador}>
            <div>
                <button className={`${pactual>=5 ? 'is-disable' : ''}`}onClick={primera}>Primera</button>
                <button className={`${pactual===1 ? 'is-disable' : ''}`}onClick={anterior}>Anterior</button>
                <ul>
                    {paginas.map(pagina => (
                        <li key={pagina} className={style.pag}>
                            <button className={`${pagina === pactual ? 'active' : ''}`} onClick={()=>especifica(pagina)}>{pagina}</button>
                        </li>
                    ))}
                </ul>
                <button className={`${pactual===paginas.length ? 'is-disable' : ''}`}onClick={siguiente}>Siguiente</button>
                <button className={`${pactual<=paginas.length-5 ? 'is-disable' : ''}`}onClick={ultima}>Última</button>
            </div>
        </nav>
    )
}