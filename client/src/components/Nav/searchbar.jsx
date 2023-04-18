import { useState } from "react";
import style from "./searchbar.module.css";

function SearchBar({onSearch, handleChange, handleSubmit}) {

    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter'){
    //         onSearch()
    //         setPokemons('')
    //     }
    // }

    return (
        <div className={style.sb}>
            <input type='search' /*value={pokemon}*/ handleChange={handleChange} /*onKeyDown={handleKeyPress}*/ className={style.bus}/>
            <button type='submit' onClick={onSearch} handleSubmit={handleSubmit} className={style.bot}/>
            <label className={style.label1}>Buscar</label>
            <label className={style.label0}>←Buscar</label>
        </div>
    )
}
export default SearchBar;