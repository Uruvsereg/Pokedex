import style from './pagination.module.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Paginacion =({cantidad, pactual, setPactual, poketodos,}) =>{
    const dispatch = useDispatch()
    // const primera = useSelector((state)=> state.PokeAll.nextOffset)
    // const anterior = useSelector((state)=> state.PokeAll.previousOffset)
    // const siguiente = useSelector((state)=> state.PokeAll.nextOffset)
    // const ultima = useSelector((state)=> state.PokeAll.previousOffset)

    const paginas = []
    const limite = Math.ceil(poketodos/cantidad)
    
    for(let j=1 ; j<= limite; j++){
        paginas.push(j)
    }

    const primera = () => {
        setPactual(pactual=1)
    }

    const anterior = () => {
        setPactual(pactual-1)
    }

    const siguiente = () => {
        setPactual(pactual+1)
    }

    const ultima = () => {
        setPactual(pactual=paginas.lenght-1)
    }

    const especifica = (p) => {
        setPactual(p)
    }

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
                {/* <div>
                    {primera>=0 ? <button name={'Primera'} onClick={() => {(getA(primera))}}/> : null}
                    {anterior>=0 ? <button name={'Anterior'} onClick={() => {(getA(anterior))}}/> : null}
                    {siguiente ? <button name={'Siguiente'} conClick={() => {(getS(siguiente))}}/> : null}
                    {ultima ? <button name={'Última'} conClick={() => {(getS(ultima))}}/> : null}
                </div> */}
            </div>
        </nav>
    )
}