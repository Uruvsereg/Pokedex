import style from './inicio.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NAV from '../../Nav/navbar';
import Cards from '../../PI/Cards/Cards'
import PokeBarra from '../../Borders/Poke/Poke';
import BarraUser from '../../Borders/User/User';
import {POKEALL} from '../../../redux/actions';
import Paginacion from '../../Filtrado/Paginacion/pagination';

const Inicio=({onSearch})=> {
    const dispatch = useDispatch();
    const Poketodos = useSelector((state) => state.PokeAll);
    const [buscaNombre, setBuscaNombre] = useState('');
    const [pokemons,setPokemons] = useState([]);
    const [pactual,setPactual] = useState(1);
    const cantidad = 12;

    useEffect(() => {
        dispatch(POKEALL())
        // dispatch(Limpiar())
    },[dispatch]);
    console.log(Poketodos);

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
        <div className={style.fondoInicio}>
            <div className={style.user}>
                <NAV handleChange={handleChange} onSearch={onSearch}/>
            </div>
            <div>
                <Cards Poketodos={Poketodos}/>
            </div>
            <div className={style.poke}>
                <PokeBarra/>
            </div>
            <div className={style.User}>
                <BarraUser/>
            </div>
            <div className={style.barra}>
                <div className={style.pagi}><Paginacion cantidad={cantidad} pactual={pactual} setPactual={setPactual}/></div>
            </div>
        </div>
    )
}
export default Inicio;