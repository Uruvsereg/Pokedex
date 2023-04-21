import { POKEALL, PKMN, GETPKM, PKMTIPOS, Cards
    //, HITEAM, BYETEAM, FILTRO, ORGANIZA 
} from "./actions";

const initialState={
    Usuarios:[],
    PokeAll:[],
    Pokedetalle: [],
    PoKeTipos: []/*,
    Cards:[]*/
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case POKEALL:
            return{
                ...state,
                PokeAll: action.payload,
            }
        case PKMN:
            return{
                ...state,
                PokeAll: action.payload,
            }
        case GETPKM:
            return{
                ...state,
                PokeAll: action.payload,
            }
        case PKMTIPOS:
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