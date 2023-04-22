import {GetPokemons, GetXNombre, GetPokedetalle, GetTipos} from './acciones'

const initialState={
    Usuarios:[],
    PokeAll:[],
    Pokedetalle: [],
    PoKeTipos: [],
    detalle:{}/*,
    Cards:[]*/
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GetPokemons:
            return{
                ...state,
                PokeAll: action.payload,
            }
        case GetXNombre:
            return{
                ...state,
                PokeAll: action.payload,
            }
        case GetPokedetalle:
            return{
                ...state,
                detalle: action.payload,
            }
        case GetTipos:
            return{
                ...state,
                poKeTipos: action.payload
            }
        // case HITEAM:
        //     return{
        //         ...state,
        //     }
        // case BYETEAM:
        //     return{
        //         ...state,
        //     }
        // case FILTRO:
        //     return{
        //         ...state,
        //     }
        // case ORGANIZA:
        //     return{
        //         ...state,
        //     }
        default:
            return state
    }
}

export default reducer;