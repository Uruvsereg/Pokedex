import style from './Card.module.css';
import {Link} from 'react-router-dom';



const Card = ({elemento}) => {
    // const [pokemon,setPokemon] = useState([]);
    // const {cantidad,setCantidad} = useState(12)
    // const [pactual,setPactual] = useState(1);

    // const pokelista = async() => {
    //     const data = await fetch('http://localhost:3001/pokemon/');
    //     const pokedata = await data.json();
    //     setPokemon(pokedata)
    // }
    
    // useEffect(() => {
    //     pokelista()
    // }, [])

    const { id, raza, Imagen, Tipo1, Tipo2 } = elemento; 
    return (
        <div className={style.fondo}>
            <div className={style.nom}>
                <h1>{raza}</h1>
            </div>
            <Link to={`/pokemon/${id}`}>
                <div className={style.img}>
                    <img src={Imagen} alt={raza}/>
                </div>
            </Link>
            <div className={style.PT}>
                <p>{Tipo1}</p>
                <p>{Tipo2}</p>
            </div>
        </div>
    )
}

export default Card;