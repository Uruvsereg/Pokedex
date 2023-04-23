import { GetPokemons, GetXNombre, GetPokedetalle, GetTipos/*, CreaPokemon/*, AddEquipo/*, DelEquipo/*, Filtro/*, Orden*/ } from "./acciones";
import axios from 'axios'

export const POKEALL = () => {//meter try catch
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pokemon')
        return dispatch({type:GetPokemons, payload: response.data})
    }
}

export const PKMN = async (name) => {
    const response = await axios(`http://localhost:3001/pokemon/?name=${name}`)
    return {type:GetXNombre, payload: response.data}
}

export const GETPKM =  (id) => {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/pokemon/${id}`)
        return dispatch({type:GetPokedetalle, payload: response.data})
    }
}

export const PKMTIPOS = () => {
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pokemon/tipos')
        return dispatch({type:GetTipos, payload: response.data})
    }
}

// export const POKREA = (props) => {
//     return async function(dispatch){
//         const response = await axios(`http://localhost:3001/pokemon/${id}`)
//         return dispatch({type:CreaPokemon, payload: response.data})
//     }
// } //esta cción debe retornar un booleano 

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