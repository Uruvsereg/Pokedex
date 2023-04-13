import SearchBar from './searchbar';
// import { Link } from 'react-router-dom'; 
import style from '../Nav/navbar.module.css';


const NAV = ({onSearch}) => {
    return(
        <nav>
            <div className={style.bn}>
                {/* <button><Link to='/home'>Inicio</Link></button>
                <button><Link to='/pokedex'></Link></button>
                <button><Link to='/about'>Info</Link></button> */}
                <button className={style.button}>Inicio</button>
                <button className={style.button}></button>
                <SearchBar onSearch={onSearch} className={style.bn}/>
                <button className={style.button}></button>
                <button className={style.button}>Salir</button>
                {/* <button><Link to='/perfil'></Link></button>
                <button><Link to='/'>Salir</Link></button> */}
            </div>
        </nav>
    )
}

export default NAV;