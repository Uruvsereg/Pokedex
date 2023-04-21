import style from './Detalles.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {POKEALL, PKMN, GETPKM, PKMTIPOS} from '../../../redux/actions';
import charizard from '../../../Multimedia/IMG/pokemones/006.png'
import Dragon from'../../../Multimedia/IMG/tipos/Dragon.png';
import Fuego from'../../../Multimedia/IMG/tipos/Fuego.png';

import NAV from '../../Nav/navbar';
import PokeBarra from '../../Borders/Poke/Poke';
import BarraUser from '../../Borders/User/User';

const Detalles = ({onSearch}) => {
    // const [pokemon, setpokemon] = useState({});
    // const {id} = useParams();
    const dispatch = useDispatch();
    const Poketodos = useSelector((state) => state.PokeAll);
    const [buscaNombre, setBuscaNombre] = useState('');

    // useEffect(() => {
    //     fetch(`http://localhost:3001/pokemon/${id}`)
    //       .then((response) => response.json())
    //       .then((poke) => {
    //         if (poke.name) {
    //           setpokeacter(poke);
    //         } else {
    //           window.alert("No hay personajes con ese ID");
    //         }
    //       })
    //       .catch((err) => {
    //         window.alert("No hay personajes con ese ID");
    //       });
    //     return setpokeacter({});
    //   }, [id]);

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
//     const t1=()=>{
//       if(pokemon.Tipo1==='dragon'){
//         return Dragon;
//       }
//       else if(pokemon.Tipo1==='fire'){
//          return Fuego;
//       }
//       else if(pokemon.Tipo1==='fighting'){
//         return Lucha;
//       }
//       else if(pokemon.Tipo1==='flying'){
//          return Valador;
//       }
//       else if(pokemon.Tipo1==='poison'){
//          return Veneno;
//       }
//       else if(pokemon.Tipo1==='ground'){
//          return Tierra;
//       }
//       else if(pokemon.Tipo1==='rock'){
//          return Roca;
//       }
//       else if(pokemon.Tipo1==='bug'){
//          return Insecto;
//       }
//       else if(pokemon.Tipo1==='ghost'){
//          return Fantasma;
//       }
//       else if(pokemon.Tipo1==='steel'){
//          return Acero;
//       }
//       else if(pokemon.Tipo1==='water'){
//          return Agua;
//       }
//       else if(pokemon.Tipo1==='grass'){
//          return Planta;
//       }
//       else if(pokemon.Tipo1==='electric'){
//          return Electrico;
//       }
//       else if(pokemon.Tipo1==='psychic'){
//          return Psiquico;
//       }
//       else if(pokemon.Tipo1==='ice'){
//          return Hielo;
//       }
//       else if(pokemon.Tipo1==='dark'){
//          return Siniestro;
//       }
//       else if(pokemon.Tipo1==='fairy'){
//          return Hada;
//       }
//       else{
//         return Normal;
//       }
//    }
//    const t2=()=>{
//       if(pokemon.Tipo1==='dragon'){
//         return Dragon;
//       }
//       else if(pokemon.Tipo1==='fire'){
//          return Fuego;
//       }
//       else if(pokemon.Tipo1==='fighting'){
//         return Lucha;
//       }
//       else if(pokemon.Tipo1==='flying'){
//          return Valador;
//       }
//       else if(pokemon.Tipo1==='poison'){
//          return Veneno;
//       }
//       else if(pokemon.Tipo1==='ground'){
//          return Tierra;
//       }
//       else if(pokemon.Tipo1==='rock'){
//          return Roca;
//       }
//       else if(pokemon.Tipo1==='bug'){
//          return Insecto;
//       }
//       else if(pokemon.Tipo1==='ghost'){
//          return Fantasma;
//       }
//       else if(pokemon.Tipo1==='steel'){
//          return Acero;
//       }
//       else if(pokemon.Tipo1==='water'){
//          return Agua;
//       }
//       else if(pokemon.Tipo1==='grass'){
//          return Planta;
//       }
//       else if(pokemon.Tipo1==='electric'){
//          return Electrico;
//       }
//       else if(pokemon.Tipo1==='psychic'){
//          return Psiquico;
//       }
//       else if(pokemon.Tipo1==='ice'){
//          return Hielo;
//       }
//       else if(pokemon.Tipo1==='dark'){
//          return Siniestro;
//       }
//       else if(pokemon.Tipo1==='fairy'){
//          return Hada;
//       }
//       else if(pokemon.Tipo1==='normal'){
//         return Normal;
//       }
//      else{
//        return null;
//      }
//   }
    return (
        <div>
            <div className={style.user}>
                <NAV handleChange={handleChange} handleSubmit={handleSubmit} onSearch={onSearch}/>
            </div>
            <div className={style.pokeraza}>
                <div>
                    {/* <label className={style.label1}>{pokemon.Raza}</label>
                    <label className={style.label2}>{pokemon.Raza}</label> */}
                    <label className={style.label2}>Charizard</label>
                    <label className={style.label1}>Charizard</label>
                </div>
            </div>
            <div className={style.poketipos}>
                <div className={style.poketipo1}>
                    <img src={ Fuego } alt={'hola'}></img>
                    {/* {src={ t1() }} */}
                </div>
                <div className={style.poketipo2}>
                    <img src={ Dragon }/>
                    {/* {src={ t2() }} */}
                </div>
            </div>
            <div className={style.dex}>
                <div className={style.pokedex}>
                    {/* <label>PokeDex: {pokemon.id}</label> */}
                    {/* <label>PokeDex: {pokemon.id}</label> */}
                    <p className={style.labeln}>6</p>
                </div>
            </div>
            <div className={style.stats}>
                <div className={style.pokevida}>
                    {/* <label>Vida: {pokemon.Vida}</label> */}
                    {/* <label>Vida: {pokemon.Vida}</label> */}
                    <p className={style.labeln}>Vida: 255</p>
                </div>
                <div className={style.pokeat}>
                    {/* <label>Ataque: {pokemon.Ataque}</label> */}
                    {/* <label>Ataque: {pokemon.Ataque}</label> */}
                    <p className={style.labeln}>Ataque: 255</p>
                </div>
                <div className={style.pokeates}>
                    {/* <label>Ataque especial: {pokemon.Ataqueespecial}</label> */}
                    {/* <label>Ataque especial: {pokemon.Ataqueespecial}</label> */}
                    <p className={style.labeln}>Ataque especial: 255</p>
                </div>
                <div className={style.pokede}>
                    {/* <label>Defensa: {pokemon.Defensa}</label> */}
                    {/* <label>Defensa: {pokemon.Defensa}</label> */}
                    <p className={style.labeln}>Defensa: 255</p>
                </div>
                <div className={style.pokedees}>
                    {/* <label>Defensa especial: {pokemon.Defensaespecial}</label> */}
                    {/* <label>Defensa especial: {pokemon.Defensaespecial}</label> */}
                    <p className={style.labeln}>Defensa especial: 255</p>
                </div>
                <div className={style.pokevel}>
                    {/* <label>Velocidad: {pokemon.Velocidad}</label> */}
                    {/* <label>Velocidad: {pokemon.Velocidad}</label> */}
                    <p className={style.labeln}>Velocidad: 255</p>
                </div>
                <div className={style.pokealt}>
                    {/* <label>Altura: {pokemon.Altura}</label> */}
                    {/* <label>Altura: {pokemon.Altura}</label> */}
                    <p className={style.labeln}>Altura: 255</p>
                </div>
                <div className={style.pokepeso}>
                    {/* <label>Peso: {pokemon.Peso}</label> */}
                    {/* <label>Peso: {pokemon.Peso}</label> */}
                    <p className={style.labeln}>Peso: 255</p>
                </div>
            </div>
            <div className={style.pokemon}>
                {/* <img src={pokemon.Imagen} alt={pokemon.Raza} className={style.img}/> */}
                <img src={ charizard }/>
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