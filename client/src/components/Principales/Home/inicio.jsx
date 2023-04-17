import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import style from './inicio.module.css';
import NAV from '../../Nav/navbar';
import { ADD } from "../../../redux/actions";
import Cards from '../../PI/Cards/Cards'

const Inicio=({onSearch})=> {
    const dispatch = useDispatch();
    const Poketodos = useSelector((state) => state.PokeAll);
    const [filtros, setFiltros] = useState(Poketodos);
    const [buscaNombre, setBuscaNombre] = useState('');

    useEffect(() => {
        dispatch(ADD())
        // return (() =>{
        //     clearDispatch();
        // })
    },[dispatch]);

    const handleChange = (event) => {
        event.preventDefault();
        buscaNombre(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtro = Poketodos.filter(Pokemon => Pokemon.name.includes(buscaNombre));
        setFiltros(filtro);
        // login(userData);
    }

    return(
        <div>
            <div className={style.user}>
                <NAV handleChange={handleChange} handleSubmit={handleSubmit} onSearch={onSearch}/>
            </div>
            <div>
                <Cards Poketodos = {Poketodos}/>
            </div>
            <div className={style.poke}>
            </div>
        </div>
    )
}
export default Inicio;