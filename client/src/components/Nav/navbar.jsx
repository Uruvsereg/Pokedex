import SearchBar from './searchbar';
import { Link } from 'react-router-dom';
import style from '../Nav/navbar.module.css';


const NAV = ({onSearch, handleSubmit}) => {
    return(
        <nav>
            <div className={style.bn}>
                <button className={style.butto}><Link to='/inicio'>Inicio</Link></button>
                <button className={style.butto}><Link to='/perfil/'>Perfil</Link></button>
                <SearchBar onSearch={onSearch} handleSubmit={handleSubmit} className={style.bb}/>
                <button className={style.butto}><Link to='/pokemon/pokenuevo'>PokeNuevo</Link></button>
                <button className={style.butto}><Link to='/'>Salir</Link></button>
            </div>
        </nav>
    )
}

export default NAV;