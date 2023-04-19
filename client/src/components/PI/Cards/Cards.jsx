import style from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({Poketodos}) => {
    const Pokes = Poketodos;
    return (
        <div className={style.dimen}>
            { Pokes?.map((elemento) => ( <Card elemento={elemento}/>)) }
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}
export default Cards;