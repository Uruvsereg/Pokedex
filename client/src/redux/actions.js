import { agregar, getXNombre/*, getPokemon/*, getPokemons/*, getTipos/*, addEquipo/*, delEquipo/*, Filtro/*, Orden*/ } from "./acciones";
import axios from 'axios'

export const ADD = () => {
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pokemons')
        return dispatch({type:agregar, payload: response.data})
    }
}

// export const GETPKM = (pokemon) => {
//     return {type:getPokemon, payload: pokemon}
// }

// export const POKEALL = (pokemon) => {
//     return {type:getPokemons, payload: pokemon}
// }

export const PKMN = async (name) => {
    const response = await axios(`http://localhost:3001/pokemons/?name=${name}`)
    return {type:getXNombre, payload: response.data}
}

// export const PKMTIPOS = (pokemon) => {
//     return {type:getTipos, payload: pokemon}
// }

// export const HITEAM = (pokemon) => {
//     return {type:addEquipo, payload: pokemon}
// }

// export const BYETEAM = (pokemon) => {
//     return {type:delEquipo, payload: pokemon}
// }

// export const FILTRO = (pokemon) => {
//     return {type:Filtro, payload: pokemon}
// }

// export const ORGANIZA = (pokemon) => {
//     return {type:Orden, payload: pokemon}
// }