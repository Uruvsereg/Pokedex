import {GetPokemons, GetXNombre, GetPokedetalle, GetTipos, CreaPokemon} from './acciones'

const initialState={
    Usuarios:[],
    PokeAll:[],
    Pokefiltro: [],
    PoKeTipos: [],
    Pokrea: [],
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
                poKeTipos: action.payload,
            }
            case CreaPokemon:
                return{
                    ...state,
                    Pokrea: action.payload,
                }
        /* case FILTRO:
            return{
                ...state,
                Pokefiltro: action.payload,
            }*/
        // case AddEquipo:
        //     return{
        //         ...state,
        //     }
        // case DelEquipo:
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