import style from './pokemons.module.css';
import Pokemon from '../Pokemon/pokemon';

export default function Pokemons({pokemones, onClose}){
    return(
        <div>
            <p></p>
            <div className={style.pok}>
                {
                    pokemones.map(({id, name,}) => {
                        return <Pokemon
                        id={id}
                        name={name}
                        image={image}
                        onClose={() => onClose(id)}
                        />
                    })
                }
            </div>
        </div>
    )
}