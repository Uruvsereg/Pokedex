import style from './Card.module.css';
import {Link} from 'react-router-dom';



const Card = ({elemento}) => {
    // const Charizard = src('../../../Multimedia/IMG/pokemones/006.png')
    const { id, raza, Image, Tipo1, Tipo2 } = elemento; 
    return (
        <div className={style.fondo}>
            <div className={style.nom}>
                {/* <h1>charizard</h1><p>6</p> */}
                <h1>{raza}</h1><p>{id}</p>
            </div>
            <Link to={`/pokemon/${id}`}>
                <div className={style.img}>
                    {/* <img src={(Charizard)}/> */}
                    <img src={Image}/>
                </div>
            </Link>
            <div className={style.PT}>
                {/* <p>Dragón</p>
                <p>Fuego</p> */}
                <p>{Tipo1}</p>
                <p>{Tipo2}</p>
            </div>
        </div>
    )
}

export default Card;