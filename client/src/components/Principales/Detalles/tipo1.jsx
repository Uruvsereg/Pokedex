import { Dragon, Fuego, Lucha, Volador, Veneno, Tierra, Roca,
   Insecto, Fantasma, Acero, Agua, Planta, Electrico, Psiquico,
   Hielo, Siniestro, Hada, Normal } from './tipos'

export default function t1(pokemon){
    switch (pokemon.Tipo1){
        case'dragon':
            return Dragon;
        case'Fire':
            return Fuego;
        case'Fighting':
            return Lucha;
        case'Flying':
            return Volador;
        case'Poison':
            return Veneno;
        case'Ground':
            return Tierra;
        case'Bock':
            return Roca;
        case'Bug':
            return Insecto;
        case'Ghost':
            return Fantasma;
        case'Steel':
            return Acero;
        case'Water':
            return Agua;
        case'Grass':
            return Planta;
        case'Electric':
            return Electrico;
        case'Psychic':
            return Psiquico;
        case'Ice':
            return Hielo;
        case'Dark':
            return Siniestro;
        case'Fairy':
            return Hada;
        default:
            return Normal;
    }  
}