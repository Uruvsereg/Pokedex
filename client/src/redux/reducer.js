import { ADD, PKMN
    // GETPKM, POKEALL, PKNTIPOS, HITEAM, BYETEAM, FILTRO, ORGANIZA 
} from "./actions";

const initialState={
    Usuarios:[],
    PokeAll:[],
    pokedetalle: [],
    
}

const reducer = (state = initialState, action) => {
    const {PokeAll} = state;
    switch(action.type){
        case ADD:
            return{
                ...state,
                PokeAll: [...PokeAll, action.payload],
            }
        case PKMN:
            return{
                ...state,
                PokeAll: action.payload,
            }
        // case GETPKM:
        //     return{
        //         ...state,
        //     }
        // case POKEALL:
        //     return{
        //         ...state,
        //     }
        // case PKNTIPOS:
        //     return{
        //         ...state,
        //     }
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
            return {...state}
    }
}

export default reducer;