import style from './Cards.module.css';
import Card from '../Card/Card';
import { Paginacion } from '../../Nav/Filtrado/Paginacion/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cards = ({Poketodos}) => {
    const dispatch = useDispatch()
    // const Pokes = Poketodos;
    const [pokemons,setPokemons] = useState([]);
    const [cantidad,setCantidad] = useState(12)
    const [pactual,setPactual] = useState(1);
    let pokemonbd = 0
    const poketodos = 1010+pokemonbd;

    
    
    
    const pokelista = async() => {
        const limit = cantidad*pactual;
        const offset = limit-cantidad;
        console.log(offset);
        console.log(limit);
        if(limit>=1011){
            limit=1010
        }
        // const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010');
        const data = await $.get(`http://localhost:3001/pokemon?offset=${offset}&limit=${limit}`);
        const pokemons = await data.json();
        console.log(pokemons);
        setPokemons(pokemons)
    }
    
    useEffect(() => {
        pokelista()
    }, [])

    return (
        <div>
            <div className={style.dimen}>
                {/* { Pokes?.map((elemento) => ( <Card elemento={elemento}/>)) } */}
                { pokemons?.map((elemento) => ( <Card elemento={elemento}/>)) }
            </div>
            <div className={style.barra}>
                <div ><Paginacion cantidad={cantidad} pactual={pactual} setPactual={setPactual} poketodos={poketodos}/></div>
            </div>
        </div>
    )
}
export default Cards;