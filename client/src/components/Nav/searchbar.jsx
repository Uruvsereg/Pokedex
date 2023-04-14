import { useState } from "react";
import style from "./searchbar.module.css";

function SearchBar({onSearch}) {
    const [pokemon, setPokemons] = useState('');

    const handleChange = (event) => {
        setPokemons(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            onSearch(pokemon)
            setPokemons('')
        }
    }

    return (
        <div className={style.sb}>
            <input type='search' value={pokemon} onChange={handleChange} onKeyDown={handleKeyPress} className={style.bus}/>
            <button onClick={() => onSearch(pokemon)} className={style.bot}/><label className={style.label0}>←Buscar</label>
            <label className={style.label1}>Buscar</label>
        </div>
    )
}
export default SearchBar;