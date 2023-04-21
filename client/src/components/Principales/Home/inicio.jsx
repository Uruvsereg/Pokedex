import style from './inicio.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NAV from '../../Nav/navbar';
import Cards from '../../PI/Cards/Cards'
import PokeBarra from '../../Borders/Poke/Poke';
import BarraUser from '../../Borders/User/User';
import {POKEALL, PKMN, GETPKM, PKMTIPOS} from '../../../redux/actions';
import { Paginacion } from '../../Nav/Filtrado/Paginacion/poke';

const Inicio=({onSearch})=> {
    const dispatch = useDispatch();
    const Poketodos = useSelector((state) => state.PokeAll);
    const [buscaNombre, setBuscaNombre] = useState('');
    // const [filtro, setFiltros] = useState(PoketodosC);

    useEffect(() => {
        dispatch(POKEALL())
        // return (() =>{
        //     clearDispatch();
        // })
    },[dispatch]);

    const handleChange = (event) => {
        event.preventDefault();
        setBuscaNombre(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const filtro = Poketodos.filter(Pokemon => Pokemon.name.includes(buscaNombre));
        // setFiltros(filtro);
        // login(userData);
        dispatch(Poketodos(buscaNombre))
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
                <PokeBarra/>
            </div>
            <div className={style.User}>
                <BarraUser/>
            </div>
        </div>
    )
}
export default Inicio;