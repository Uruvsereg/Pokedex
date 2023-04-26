import { useState } from "react";
import style from './pokenuevo.module.css';
import PokeBarra from '../../Borders/Poke/Poke'
import validaciones from "./validaciones";
import NAV from "../../Nav/navbar";
import SeleTipos from './Selectores/tipos';

const Formli=({onSearch})=>{
    const [raza, setRaza] = useState('');
    const [imagen, setImagen] = useState('');
    const [tipo1, setTipo1] = useState('');
    const [tipo2, setTipo2] = useState('');
    const [vida, setVida] = useState(0);
    const [ataque, setAtaque] = useState(0);
    const [ataqueespecial, setAtaqueespecial] = useState(0);
    const [defensa, setDefensa] = useState(0);
    const [defensaespecial, setDefensaespecial] = useState(0);
    const [velocidad, setVelocidad] = useState(0);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    
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
    // const [pokeData,setPokeData]=useState({ 
    //     raza:'',
    //     imagen:'',
    //     tipo1:'',
    //     tipo2:'',
    //     vida:'',
    //     ataque:'',
    //     ataqueespecial:'',
    //     defensa:'',
    //     defensaespecial:'',
    //     velocidad:'',
    //     altura:'',
    //     peso:''
    // });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    //     if(raza.length> 30){return alert("The name should not exceed 30 characters")}
    //     const poke = {raza: raza.toLowerCase(), imagen, tipo1, tipo2, vida, ataque, ataqueespecial, defensa, defensaespecial, velocidad, altura, peso};
    //     dispatch(actions.CreaPokemon(poke))
    }
    
    return(
        <div>
            <div className={style.user}>
                <NAV onSearch={onSearch}/>
            </div>
            <div className={style.f}>
                <form onSubmit={handleSubmit}>
                    <div className={style.ing}>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='raza' className={style.label0}>Raza:  </label>
                                <label htmlFor='raza' className={style.label1}>Raza:  </label>
                            </div>
                            <input type='text' name='raza' value={raza} onChange={setRaza} className={style.lue}></input>
                            {errors.raza && <p className={style.logp}>{errors.raza}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='imagen' className={style.label0}>Imagen:  </label>
                                <label htmlFor='imagen' className={style.label1}>Imagen:  </label>
                            </div>
                            <input type='text' name='imagen' value={imagen} onChange={setImagen} className={style.lue}></input>
                            {errors.imagen && <p className={style.logp}>{errors.imagen}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='tipo1' className={style.label0}>Tipo1:  </label>
                                <label htmlFor='tipo1' className={style.label1}>Tipo1:  </label>
                            </div>
                            <SeleTipos value={tipo1} isDefault={false} onChange={setTipo1}/>
                            {errors.tipo1 && <p className={style.logp}>{errors.tipo1}</p>}
                        </div>
                        <div className={style.carac}>{/*tipo1===tipo1 ? throw ne Error :*/}
                            <div className={style.cFPoNu}>
                                <label htmlFor='tipo2' className={style.label0}>Tipo2:  </label>
                                <label htmlFor='tipo2' className={style.label1}>Tipo2:  </label>
                            </div>
                            <SeleTipos value={tipo2} isDefault={false} onChange={setTipo2}/>
                            {errors.tipo2 && <p className={style.logp}>{errors.tipo2}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='vida' className={style.label0}>Vida:  </label>
                                <label htmlFor='vida' className={style.label1}>Vida:  </label>
                            </div>
                            <input type='text' name='vida' value={vida} onChange={setVida} className={style.lue}></input>
                            {errors.vida && <p className={style.logp}>{errors.vida}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='ataque' className={style.label0}>Ataque:  </label>
                                <label htmlFor='ataque' className={style.label1}>Ataque:  </label>
                            </div>
                            <input type='text' name='ataque' value={ataque} onChange={setAtaque} className={style.lue}></input>
                            {errors.ataque && <p className={style.logp}>{errors.ataque}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='ataqueespecial' className={style.label0}>AtaqueEspecial:  </label>
                                <label htmlFor='ataqueespecial' className={style.label1}>AtaqueEspecial:  </label>
                            </div>
                            <input type='text' name='ataqueespecial' value={ataqueespecial} onChange={setAtaqueespecial} className={style.lue}></input>
                            {errors.ataqueespecial && <p className={style.logp}>{errors.ataqueespecial}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='defensa' className={style.label0}>Defensa:  </label>
                                <label htmlFor='defensa' className={style.label1}>Defensa:  </label>
                            </div>
                            <input type='text' name='defensa' value={defensa} onChange={setDefensa} className={style.lue}></input>
                            {errors.defensa && <p className={style.logp}>{errors.defensa}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='defensaespecial' className={style.label0}>DefensaEspecial:  </label>
                                <label htmlFor='defensaespecial' className={style.label1}>DefensaEspecial:  </label>
                            </div>
                            <input type='text' name='defensaespecial' value={defensaespecial} onChange={setDefensaespecial} className={style.lue}></input>
                            {errors.defensaespecial && <p className={style.logp}>{errors.defensaespecial}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='velocidad' className={style.label0}>Velocidad:  </label>
                                <label htmlFor='velocidad' className={style.label1}>Velocidad:  </label>
                            </div>
                            <input type='text' name='velocidad' value={velocidad} onChange={setVelocidad} className={style.lue}></input>
                            {errors.velocidad && <p className={style.logp}>{errors.velocidad}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='altura' className={style.label0}>Altura:  </label>
                                <label htmlFor='altura' className={style.label1}>Altura:  </label>
                            </div>
                            <input type='text' name='altura' value={altura} onChange={setAltura}/>
                            {errors.altura && <p className={style.logp}>{errors.altura}</p>}
                        </div>
                        <div className={style.carac}>
                            <div className={style.cFPoNu}>
                                <label htmlFor='peso' className={style.label0}>Peso:  </label>
                                <label htmlFor='peso' className={style.label1}>Peso:  </label>
                            </div>
                            <input type='text' name='peso'value={peso} onChange={setPeso}/>
                            {errors.peso && <p className={style.logp}>{errors.peso}</p>}
                        </div>
                    </div>
                    <div className={style.bottc}>
                        <button type='submit' className={style.bott}>Crear</button>
                    </div>
                    <div>
                        <PokeBarra/>
                    </div>
                </form>
                <div className={style.poke}>
                    <div className={style.pokeraz}>
                        <h1>{raza}</h1>
                        <h1>{raza}</h1>
                    </div>
                    <div className={style.pokefoto}>
                    </div>
                    <div className={style.pokar}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Formli;