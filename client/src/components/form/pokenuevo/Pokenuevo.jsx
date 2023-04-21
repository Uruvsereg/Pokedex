import { useState } from "react";
import style from './pokenuevo.module.css';
import PokeBarra from '../../Borders/Poke/Poke'
import validation from "./validaciones";

const Formli=({login})=>{
    const [pokeData,setPokeData]=useState({ 
        raza:'',
        imagen:'',
        tipo1:'',
        tipo2:'',
        vida:'',
        ataque:'',
        ataqueespecial:'',
        defensa:'',
        defensaespecial:'',
        velocidad:'',
        altura:'',
        peso:''
    });

    const handleInputChange=(event)=>{
        setPokeData({
            ...pokeData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...pokeData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(pokeData);
    }

    const [errors,setErrors]=useState({
        raza:'',
        imagen:'',
        tipo1:'',
        tipo2:'',
        vida:'',
        ataque:'',
        ataqueespecial:'',
        defensa:'',
        defensaespecial:'',
        velocidad:'',
        altura:'',
        peso:''
    });

    return(
        <div className={style.f}>
            <form onSubmit={handleSubmit}>
                <div className={style.ing}>
                    <div className={style.carac}>{/*Pokemon.includes(raza) ? throw new Error : */}
                        <label htmlFor='Raza' className={style.label0}>Raza:  </label>
                        <label htmlFor='Raza' className={style.label1}>Raza:  </label>
                        <input type='text' name='raza' value={pokeData.raza} onChange={handleInputChange} className={style.lue}></input>
                        {errors.raza && <p className={style.logp}>{errors.raza}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Imagen' className={style.label0}>Imagen:  </label>
                        <label htmlFor='Imagen' className={style.label1}>Imagen:  </label>
                        <input type='text' name='imagen' value={pokeData.imagen} onChange={handleInputChange} className={style.lue}></input>
                        {errors.imagen && <p className={style.logp}>{errors.imagen}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Tipo1' className={style.label0}>Tipo1:  </label>
                        <label htmlFor='Tipo1' className={style.label1}>Tipo1:  </label>
                        <input type='text' name='tipo1' value={pokeData.tipo1} onChange={handleInputChange} className={style.lue}></input>
                        {errors.tipo1 && <p className={style.logp}>{errors.tipo1}</p>}
                    </div>
                    <div className={style.carac}>{/*tipo1===tipo1 ? throw ne Error :*/}
                        <label htmlFor='Tipo2' className={style.label0}>Tipo2:  </label>
                        <label htmlFor='Tipo2' className={style.label1}>Tipo2:  </label>
                        <input type='text' name='tipo2' value={pokeData.tipo2} onChange={handleInputChange} className={style.lue}></input>
                        {errors.tipo2 && <p className={style.logp}>{errors.tipo2}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Vida' className={style.label0}>Vida:  </label>
                        <label htmlFor='Vida' className={style.label1}>Vida:  </label>
                        <input type='text' name='vida' value={pokeData.vida} onChange={handleInputChange} className={style.lue}></input>
                        {errors.vida && <p className={style.logp}>{errors.vida}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Ataque' className={style.label0}>Ataque:  </label>
                        <label htmlFor='Ataque' className={style.label1}>Ataque:  </label>
                        <input type='text' name='ataque' value={pokeData.ataque} onChange={handleInputChange} className={style.lue}></input>
                        {errors.ataque && <p className={style.logp}>{errors.ataque}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Ataqueespecial' className={style.label0}>AtaqueEspecial:  </label>
                        <label htmlFor='Ataqueespecial' className={style.label1}>AtaqueEspecial:  </label>
                        <input type='text' name='ataqueespecial' value={pokeData.ataqueespecial} onChange={handleInputChange} className={style.lue}></input>
                        {errors.ataqueespecial && <p className={style.logp}>{errors.ataqueespecial}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='defensa' className={style.label0}>Defensa:  </label>
                        <label htmlFor='defensa' className={style.label1}>Defensa:  </label>
                        <input type='text' name='defensa' value={pokeData.defensa} onChange={handleInputChange} className={style.lue}></input>
                        {errors.defensa && <p className={style.logp}>{errors.defensa}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='defensaespecial' className={style.label0}>DefensaEspecial:  </label>
                        <label htmlFor='defensaespecial' className={style.label1}>DefensaEspecial:  </label>
                        <input type='text' name='defensaespecial' value={pokeData.defensaespecial} onChange={handleInputChange} className={style.lue}></input>
                        {errors.defensaespecial && <p className={style.logp}>{errors.defensaespecial}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='velocidad' className={style.label0}>Velocidad:  </label>
                        <label htmlFor='velocidad' className={style.label1}>Velocidad:  </label>
                        <input type='text' name='velocidad' value={pokeData.velocidad} onChange={handleInputChange} className={style.lue}></input>
                        {errors.velocidad && <p className={style.logp}>{errors.velocidad}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='altura' className={style.label0}>Altura:  </label>
                        <label htmlFor='altura' className={style.label1}>Altura:  </label>
                        <input type='text' name='altura' value={pokeData.altura} onChange={handleInputChange} className={style.lue}></input>
                        {errors.altura && <p className={style.logp}>{errors.altura}</p>}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='peso' className={style.label0}>Peso:  </label>
                        <label htmlFor='peso' className={style.label1}>Peso:  </label>
                        <input type='text' name='peso' value={pokeData.peso} onChange={handleInputChange} className={style.lpe}></input>
                        {errors.peso && <p className={style.logp}>{errors.peso}</p>}
                    </div>
                </div>
                <div>
                    <PokeBarra/>
                </div>
                <div className={style.bot}>
                    <button type='submit' ></button>
                </div>
            </form>
        </div>
    )
}
export default Formli;