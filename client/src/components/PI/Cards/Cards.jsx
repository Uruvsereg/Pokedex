import style from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({Poketodos}) => {
    const Pokes = Poketodos;
    return (
        <div className={style.dimen}>
            { Pokes?.map((elemento) => ( <Card elemento={elemento}/>)) }
        </div>
    )
}
export default Cards;