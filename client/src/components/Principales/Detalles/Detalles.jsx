import style from './Detalles.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {POKEALL, PKMN, GETPKM, PKMTIPOS} from '../../../redux/actions';
import { useParams } from 'react-router-dom';
// import { t1 } from './tipo1';
// import { t2 } from './tipo2';
import Dragon from'../../../Multimedia/IMG/tipos/Dragon.png';
import Fuego from'../../../Multimedia/IMG/tipos/Fuego.png';
import Lucha from'../../../Multimedia/IMG/tipos/Lucha.png';
import Volador from'../../../Multimedia/IMG/tipos/Volador.png';
import Veneno from'../../../Multimedia/IMG/tipos/Veneno.png';
import Tierra from'../../../Multimedia/IMG/tipos/Tierra.png';
import Roca from'../../../Multimedia/IMG/tipos/Roca.png';
import Insecto from'../../../Multimedia/IMG/tipos/Insecto.png';
import Fantasma from'../../../Multimedia/IMG/tipos/Fantasma.png';
import Acero from'../../../Multimedia/IMG/tipos/Acero.png';
import Agua from'../../../Multimedia/IMG/tipos/Agua.png';
import Planta from'../../../Multimedia/IMG/tipos/Planta.png';
import Electrico from'../../../Multimedia/IMG/tipos/Electrico.png';
import Psiquico from'../../../Multimedia/IMG/tipos/Psiquico.png';
import Hielo from'../../../Multimedia/IMG/tipos/Hielo.png';
import Siniestro from'../../../Multimedia/IMG/tipos/Siniestro.png';
import Hada from'../../../Multimedia/IMG/tipos/Hada.png';
import Normal from'../../../Multimedia/IMG/tipos/Normal.png';
import NAV from '../../Nav/navbar';
import PokeBarra from '../../Borders/Poke/Poke';
import BarraUser from '../../Borders/User/User';

const Detalles = ({onSearch}) => {
    // const [pokemon, setpokemon] = useState({});
    const {id} = useParams();
    const dispatch = useDispatch();
    const [buscaNombre, setBuscaNombre] = useState('');

    useEffect(() => {
        dispatch(GETPKM(id))
    }, [dispatch])

    const handleChange = (event) => {
        event.preventDefault();
        setBuscaNombre(event.target.value)
    }

    const pokemon = useSelector((state) => state.detalle)
    console.log(pokemon)

    const t1=()=>{
        switch (pokemon.Tipo1){
            case'dragon':
                return Dragon;
            case'Fire':
                return Fuego;
            case'Fighting':
                return Lucha;
            case'Flying':
                return Volador;
            case'Poison':
                return Veneno;
            case'Ground':
                return Tierra;
            case'Bock':
                return Roca;
            case'Bug':
                return Insecto;
            case'Ghost':
                return Fantasma;
            case'Steel':
                return Acero;
            case'Water':
                return Agua;
            case'Grass':
                return Planta;
            case'Electric':
                return Electrico;
            case'Psychic':
                return Psiquico;
            case'Ice':
                return Hielo;
            case'Dark':
                return Siniestro;
            case'Fairy':
                return Hada;
            default:
                return Normal;
           }  
    }

    const t2=()=>{
        switch (pokemon.Tipo2) {
            case 'Dragon':
            return Dragon;
            case 'Fire':
                return Fuego;
            case 'Fighting':
                return Lucha;
            case 'Flying':
                return Volador;
            case 'Poison':
                return Veneno;
            case 'Ground':
                return Tierra;
            case 'Rock':
                return Roca;
            case 'Bug':
                return Insecto;
            case 'Ghost':
                return Fantasma;
            case 'Steel':
                return Acero;
            case 'Water':
                return Agua;
            case 'Grass':
                return Planta;
            case 'Electric':
                return Electrico;
            case 'Psychic':
                return Psiquico;
            case 'Ice':
                return Hielo;
            case 'Dark':
                return Siniestro;
            case 'Fairy':
                return Hada;
            case 'Normal':
                return Normal;
            default:
                return null;
        }

    }
    return (
        <div>
            <div className={style.user}>
                <NAV handleChange={handleChange} onSearch={onSearch}/>
            </div>
            <div className={style.pokeraza}>
                <div>
                    <p className={style.label2}>{pokemon.raza}</p>
                    <p className={style.label1}>{pokemon.raza}</p>
                </div>
            </div>
            <div className={style.poketipos}>
                <div className={style.poketipo1}>
                    {/* <img src={ Fuego } alt={'hola'}></img> */}
                    <img src={ t1() } alt={pokemon.Tipo1}/>
                </div>
                <div className={style.poketipo2}>
                    {/* <img src={ Volador }/> */}
                    <img src={ t2() } alt={pokemon.Tipo2}/>
                </div>
            </div>
            <div className={style.dex}>
                <div className={style.pokedex}>
                    <p>PokeDex: {pokemon.id}</p>
                    <p>PokeDex: {pokemon.id}</p>
                    {/* <p className={style.labeln}>6</p> */}
                </div>
            </div>
            <div className={style.stats}>
                <div className={style.pokevida}>
                    <p>Vida: {pokemon.Vida}</p>
                    <p>Vida: {pokemon.Vida}</p>
                    {/* <p className={style.labeln}>Vida: 255</p> */}
                </div>
                <div className={style.pokeat}>
                    <p>Ataque: {pokemon.Ataque}</p>
                    <p>Ataque: {pokemon.Ataque}</p>
                    {/* <p className={style.labeln}>Ataque: 255</p> */}
                </div>
                <div className={style.pokeates}>
                    <p>Ataque especial: {pokemon.Ataqueespecial}</p>
                    <p>Ataque especial: {pokemon.Ataqueespecial}</p>
                    {/* <p className={style.labeln}>Ataque especial: 255</p> */}
                </div>
                <div className={style.pokede}>
                    <p>Defensa: {pokemon.Defensa}</p>
                    <p>Defensa: {pokemon.Defensa}</p>
                    {/* <p className={style.labeln}>Defensa: 255</p> */}
                </div>
                <div className={style.pokedees}>
                    <p>Defensa especial: {pokemon.Defensaespecial}</p>
                    <p>Defensa especial: {pokemon.Defensaespecial}</p>
                    {/* <p className={style.labeln}>Defensa especial: 255</p> */}
                </div>
                <div className={style.pokevel}>
                    <p>Velocidad: {pokemon.Velocidad}</p>
                    <p>Velocidad: {pokemon.Velocidad}</p>
                    {/* <p className={style.labeln}>Velocidad: 255</p> */}
                </div>
                <div className={style.pokealt}>
                    <p>Altura: {pokemon.Altura}</p>
                    <p>Altura: {pokemon.Altura}</p>
                    {/* <p className={style.labeln}>Altura: 255</p> */}
                </div>
                <div className={style.pokepeso}>
                    <p>Peso: {pokemon.Peso}</p>
                    <p>Peso: {pokemon.Peso}</p>
                    {/* <p className={style.labeln}>Peso: 255</p> */}
                </div>
            </div>
            <div className={style.pokemon}>
                <img src={pokemon.Imagen} alt={pokemon.Raza} className={style.img}/>
                {/* <img src={ charizard }/> */}
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

export default Detalles;