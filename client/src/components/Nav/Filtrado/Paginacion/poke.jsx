// import React, { useState, useEffect } from "react";
// import { Paginacion } from "./pagination";

// export const Pokemones =() =>{

//     const [pokemons,setPokemons] = useState([]);
//     const [cantidad,setCantidad] = useState(12)
//     const [pactual,setPactual] = useState(1);
//     let pokemonbd = 0
//     const poketodos = 1010+pokemonbd;

    

//     const pokelista = async() => {
//         const limit = cantidad*pactual;
//         const offset = limit-cantidad;
//         console.log(offset);
//         console.log(limit);
//         // const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010');
//         const data = await fetch(`http://localhost:3001/pokemon?offset=${offset}&limit=${limit}`);
//         const pokemons = await data.json();
//         console.log(pokemons);
//         setPokemons(pokemons)
//     }
    
//     useEffect(() => {
//         pokelista()
//     }, [])
    
//     return(
//         <>
//             <div>
//                 {pokemons.map(pokemon =>(
//                     <div key={pokemon.id}>
//                         <figure>
//                             <img src={pokemon.Imagen} alt={pokemon.Raza}/>
//                         </figure>
//                         <div>
//                             <h3>{pokemon.Raza}</h3>
//                             <label>{pokemon.tipo1}</label>
//                             <label>{pokemon.tipo2}</label>
//                         </div>
//                     </div>
//                 ))}
//                 {/* )).slice(offset, limit)} */}
//                 <Paginacion cantidad={cantidad} pactual={pactual} setPactual={setPactual} poketodos={poketodos}/>
//             </div>
//         </>
//     )
// }
// // const [,set] = useState();