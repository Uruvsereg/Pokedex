import style from './Card.module.css';

const Card = ({elemento}) => {
    // const PokemoN = {
    //     id: dataP.id,
    //     raza: dataP.name,
    //     Imagen: dataP.sprites.front_default,
    //     Tipo1: dataP.types[0].type.name.charAt(0).toUpperCase()+dataP.types[0].type.name.slice(1),
    //     Tipo2: dataP.types[1]?.type.name.charAt(0).toUpperCase()+dataP.types[1]?.type.name.slice(1),
    //     Vida: dataP.stats.find(({stat}) => stat.name === "hp").base_stat,
    //     Ataque: dataP.stats.find(({stat}) => stat.name === "attack").base_stat,
    //     AtEsp: dataP.stats.find(({stat}) => stat.name === "special-attack").base_stat,
    //     Defensa: dataP.stats.find(({stat}) => stat.name === "defense").base_stat,
    //     DeEsp: dataP.stats.find(({stat}) => stat.name === "special-defense").base_stat,
    //     Velocidad: dataP.stats.find(({stat}) => stat.name === "speed").base_stat,
    //     Altura: dataP.height,
    //     Peso: dataP.weight
    // };
    const { id, raza, Image, Tipo1, Tipo2 } = elemento;
    return (
        <div className={style.fondo}>
            <div className={style.nom}>
                <h1>Raza: {raza}</h1><p>{id}</p>
            </div>
            <div className={style.img}>
                <img src={Image}/>
            </div>
            <div className={style.PT}>
                <p>Tipo1: {Tipo1}</p>
                <p>Tipo2: {Tipo2}</p>
            </div>
        </div>
    )
}

export default Card;