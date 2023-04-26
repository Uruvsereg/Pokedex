import style from './pagination.module.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filtros } from '../filtros/filtros';
import { XTipos } from '../portipos/XTipos';

export default function Paginacion({cantidad, pactual, setPactual}){
    
    // const pagina = (Poketodos) =>{
        //     for(let j=0 ; j<= limite; j++){
            //         inicio = j*cantidad
            //         fin = (i+1)*12
            //         paginas = Poketodos[inicio:fin]
            //         // paginas.push(j)
            //         // console.log(pokepag)
            //     }
            // }
            const Poketodos = useSelector((state) => state.PokeAll);
            const limite = Math.ceil(Poketodos.length/cantidad);
            
            const primera = () => { setPactual(pactual=1) }
            const anterior = () => { setPactual(pactual-1) }
            const siguiente = () => { setPactual(pactual+1) }
            const ultima = () => { setPactual(pactual=paginas.lenght-1) }
            const especifica = (p) => { setPactual(p) }
            const final = pactual*cantidad;
            const inicio = final-cantidad;
            const pokepag = Poketodos.slice(inicio, final);
            console.log(pokepag[11])
            console.log(limite)
            const paginas = []
            for(let j=1 ; j<= limite; j++){
                paginas.push(j)
            }
            console.log(paginas)
            
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
            <div>
                <Filtros Poketodos={Poketodos}/>
            </div>
            <div>
                <XTipos Poketodos={Poketodos}/>
            </div>
        </nav>
    )
}