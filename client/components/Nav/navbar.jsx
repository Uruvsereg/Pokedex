import SearchBar from './searchbar';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';


const NAV = ({onSearch}) => {
    return(
        <nav>
            <div className={style.bn}>
                <button><Link to='/home'>Inicio</Link></button>
                <button><Link to='/pokedex'></Link></button>
                <button><Link to='/about'></Link></button>
                <button><Link></Link></button>
                <SearchBar onSearch={onSearch}/>
                <button><Link to='/perfil'></Link></button>
                <button><Link to='/'>Salir</Link></button>
            </div>
        </nav>
    )
}

export default NAV;