import SearchBar from './searchbar';
import { Link } from 'react-router-dom';
import style from '../Nav/navbar.module.css';


const NAV = ({onSearch, handleChange, handleSubmit}) => {
    return(
        <nav>
            <div className={style.bn}>
                <button className={style.button}><Link to='/inicio'>Inicio</Link></button>
                <button className={style.button}><Link to='/perfil/'>Perfil</Link></button>
                <SearchBar onSearch={onSearch} handleChange={handleChange} handleSubmit={handleSubmit} className={style.bn}/>
                <button className={style.button}><Link to='/pokemon/pokenuevo'>PokeNuevo</Link></button>
                <button className={style.button}><Link to='/'>Salir</Link></button>
            </div>
        </nav>
    )
}

export default NAV;