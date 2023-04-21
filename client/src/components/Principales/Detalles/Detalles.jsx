import style from './Detalles.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {POKEALL, PKMN, GETPKM, PKMTIPOS} from '../../../redux/actions';

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
//         return '../../../Multimedia/IMG/tipos/Dragon.png';
//       }
//       else if(pokemon.Tipo1==='fire'){
//          return '../../../Multimedia/IMG/tipos/Fuego.png';
//       }
//       else if(pokemon.Tipo1==='fighting'){
//         return '../../../Multimedia/IMG/tipos/Lucha.png';
//       }
//       else if(pokemon.Tipo1==='flying'){
//          return '../../../Multimedia/IMG/tipos/Volador.png';
//       }
//       else if(pokemon.Tipo1==='poison'){
//          return '../../../Multimedia/IMG/tipos/Veneno.png';
//       }
//       else if(pokemon.Tipo1==='ground'){
//          return '../../../Multimedia/IMG/tipos/Tierra.png';
//       }
//       else if(pokemon.Tipo1==='rock'){
//          return '../../../Multimedia/IMG/tipos/Roca.png';
//       }
//       else if(pokemon.Tipo1==='bug'){
//          return '../../../Multimedia/IMG/tipos/Insecto.png';
//       }
//       else if(pokemon.Tipo1==='ghost'){
//          return '../../../Multimedia/IMG/tipos/Fantasma.png';
//       }
//       else if(pokemon.Tipo1==='steel'){
//          return '../../../Multimedia/IMG/tipos/Acero.png';
//       }
//       else if(pokemon.Tipo1==='water'){
//          return '../../../Multimedia/IMG/tipos/Agua.png';
//       }
//       else if(pokemon.Tipo1==='grass'){
//          return '../../../Multimedia/IMG/tipos/Planta.png';
//       }
//       else if(pokemon.Tipo1==='electric'){
//          return '../../../Multimedia/IMG/tipos/Electrico.png';
//       }
//       else if(pokemon.Tipo1==='psychic'){
//          return '../../../Multimedia/IMG/tipos/Psiquico.png';
//       }
//       else if(pokemon.Tipo1==='ice'){
//          return '../../../Multimedia/IMG/tipos/Hielo.png';
//       }
//       else if(pokemon.Tipo1==='dark'){
//          return '../../../Multimedia/IMG/tipos/Siniestro.png';
//       }
//       else if(pokemon.Tipo1==='fairy'){
//          return '../../../Multimedia/IMG/tipos/Hada.png';
//       }
//       else{
//         return '../../../Multimedia/IMG/tipos/Normal.png';
//       }
//    }
//    const t2=()=>{
//     if(pokemon.Tipo1==='dragon'){
//       return '../../../Multimedia/IMG/tipos/Dragon.png';
//     }
//     else if(pokemon.Tipo1==='fire'){
//        return '../../../Multimedia/IMG/tipos/Fuego.png';
//     }
//     else if(pokemon.Tipo1==='fighting'){
//       return '../../../Multimedia/IMG/tipos/Lucha.png';
//     }
//     else if(pokemon.Tipo1==='flying'){
//        return '../../../Multimedia/IMG/tipos/Volador.png';
//     }
//     else if(pokemon.Tipo1==='poison'){
//        return '../../../Multimedia/IMG/tipos/Veneno.png';
//     }
//     else if(pokemon.Tipo1==='ground'){
//        return '../../../Multimedia/IMG/tipos/Tierra.png';
//     }
//     else if(pokemon.Tipo1==='rock'){
//        return '../../../Multimedia/IMG/tipos/Roca.png';
//     }
//     else if(pokemon.Tipo1==='bug'){
//        return '../../../Multimedia/IMG/tipos/Insecto.png';
//     }
//     else if(pokemon.Tipo1==='ghost'){
//        return '../../../Multimedia/IMG/tipos/Fantasma.png';
//     }
//     else if(pokemon.Tipo1==='steel'){
//        return '../../../Multimedia/IMG/tipos/Acero.png';
//     }
//     else if(pokemon.Tipo1==='water'){
//        return '../../../Multimedia/IMG/tipos/Agua.png';
//     }
//     else if(pokemon.Tipo1==='grass'){
//        return '../../../Multimedia/IMG/tipos/Planta.png';
//     }
//     else if(pokemon.Tipo1==='electric'){
//        return '../../../Multimedia/IMG/tipos/Electrico.png';
//     }
//     else if(pokemon.Tipo1==='psychic'){
//        return '../../../Multimedia/IMG/tipos/Psiquico.png';
//     }
//     else if(pokemon.Tipo1==='ice'){
//        return '../../../Multimedia/IMG/tipos/Hielo.png';
//     }
//     else if(pokemon.Tipo1==='dark'){
//        return '../../../Multimedia/IMG/tipos/Siniestro.png';
//     }
//     else if(pokemon.Tipo1==='fairy'){
//        return '../../../Multimedia/IMG/tipos/Hada.png';
//     }
//     else if(pokemon.Tipo1==='normal'){
//        return '../../../Multimedia/IMG/tipos/Normal.png';
//     }
//      else{
//        return null;
//      }
//   }
    return (
        <div>
            <div className={style.user}>
                <NAV handleChange={handleChange} handleSubmit={handleSubmit} onSearch={onSearch}/>
            </div>
            <div className={style.pokemon}>
                {/* <img src={pokemon.Imagen} alt={pokemon.Raza} className={style.img}/> */}
                <img src={'../../../Multimedia/IMG/pokemones/006.png'}/>
            </div>
            <div className={style.pokeraza}>
                <div>
                    {/* <label className={style.label1}>{pokemon.Raza}</label>
                    <label className={style.label2}>{pokemon.Raza}</label> */}
                    <label className={style.label1}>Charizard</label>
                    <label className={style.label2}>Charizard</label>
                </div>
            </div>
            <div className={style.poketipos}>
                <div className={style.poketipo1}>
                    <img src={'../../../Multimedia/IMG/tipos/Dragon.png'}/>
                    {/* {src=t1()} */}
                </div>
                <div className={style.poketipo2}>
                    <img src={'../../../Multimedia/IMG/tipos/Dragon.png'}/>
                    {/* {src=t2()} */}
                </div>
            </div>
            <div className={style.pokedex}>
                <label>1</label>
            </div>
            <div className={style.poke}>
                <label></label>
            </div>
            <div className={style.poke}>
                <label></label>
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