import { getPokemons, getXNombre, getPokedetalle, getTipos/*, addEquipo/*, delEquipo/*, Filtro/*, Orden*/ } from "./acciones";
import axios from 'axios'

export const POKEALL = () => {
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pokemon')
        return dispatch({type:getPokemons, payload: response.data})
    }
}

export const PKMN = async (name) => {
    const response = await axios(`http://localhost:3001/pokemon/?name=${name}`)
    return {type:getXNombre, payload: response.data}
}

export const GETPKM = async (id) => {
    const response = await axios(`http://localhost:3001/pokemon/${id}`)
    return {type:getPokedetalle, payload: response.data}
}

export const PKMTIPOS = () => {
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pokemon/tipos')
        return {type:getTipos, payload: response.data}
    }
}
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