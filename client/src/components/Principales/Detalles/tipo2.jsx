import { Dragon, Fuego, Lucha, Volador, Veneno, Tierra, Roca,
    Insecto, Fantasma, Acero, Agua, Planta, Electrico, Psiquico,
    Hielo, Siniestro, Hada, Normal } from './tipos'

export const t2 = ({pokemon}) =>{
    if(pokemon.Tipo1==='dragon'){
      return Dragon;
    }
    else if(pokemon.Tipo1==='fire'){
       return Fuego;
    }
    else if(pokemon.Tipo1==='fighting'){
      return Lucha;
    }
    else if(pokemon.Tipo1==='flying'){
       return Volador;
    }
    else if(pokemon.Tipo1==='poison'){
       return Veneno;
    }
    else if(pokemon.Tipo1==='ground'){
       return Tierra;
    }
    else if(pokemon.Tipo1==='rock'){
       return Roca;
    }
    else if(pokemon.Tipo1==='bug'){
       return Insecto;
    }
    else if(pokemon.Tipo1==='ghost'){
       return Fantasma;
    }
    else if(pokemon.Tipo1==='steel'){
       return Acero;
    }
    else if(pokemon.Tipo1==='water'){
       return Agua;
    }
    else if(pokemon.Tipo1==='grass'){
       return Planta;
    }
    else if(pokemon.Tipo1==='electric'){
       return Electrico;
    }
    else if(pokemon.Tipo1==='psychic'){
       return Psiquico;
    }
    else if(pokemon.Tipo1==='ice'){
       return Hielo;
    }
    else if(pokemon.Tipo1==='dark'){
       return Siniestro;
    }
    else if(pokemon.Tipo1==='fairy'){
       return Hada;
    }
    else if(pokemon.Tipo1==='normal'){
      return Normal;
    }
   else{
     return null;
   }
}