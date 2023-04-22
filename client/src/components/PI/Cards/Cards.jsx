import style from './Cards.module.css';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cards = ({offset, limit}) => {
    const dispatch = useDispatch()
    // const Pokes = Poketodos;
    const [pokemons,setPokemons] = useState([]);
    // let pokemonbd = 0+Pokemon
    // const Poketodos = 1010+pokemonbd;

    const pokelista = async() => {
        // const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010');
        const data = await fetch(`http://localhost:3001/pokemon?offset=${offset}&limit=${limit}`);
        const pokemons = await data.json();
        console.log(pokemons);
        setPokemons(pokemons)
    }

    useEffect(() => {
        pokelista()
    }, [])

    return (
        <div key={pokemons.id}>
            <div className={style.dimen}>
                {/* { Pokes?.map((elemento) => ( <Card elemento={elemento}/>)) } */}
                { pokemons?.map((elemento) => {return<Card elemento={elemento}/>}) }
            </div>
        </div>
    )
}
export default Cards;