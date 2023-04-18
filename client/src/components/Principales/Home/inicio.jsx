import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import style from './inicio.module.css';
import NAV from '../../Nav/navbar';
import { ADD, PKMN } from "../../../redux/actions";
import Cards from '../../PI/Cards/Cards'

const Inicio=({onSearch})=> {
    const dispatch = useDispatch();
    const Poketodos = useSelector((state) => state.Poketodos);
    const [buscaNombre, setBuscaNombre] = useState('');
    // const [filtro, setFiltros] = useState(PoketodosC);

    useEffect(() => {
        dispatch(ADD())
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
        // // login(userData);
        dispatch(PKMN(buscaNombre))
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