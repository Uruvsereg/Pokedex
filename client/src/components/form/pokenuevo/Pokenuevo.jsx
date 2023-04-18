import { useState } from "react";
import style from './pokenuevo.module.css';
import PokeBarra from '../../Borders/Poke/Poke'
// import validation from "./validations";

const Formli=({login})=>{
    const [userData,setUserData]=useState({ 
        username:'',
        password:''
    });

    const handleInputChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        // setErrors(
        //     validation({
        //         ...userData,
        //         [event.target.name]: event.target.value
        //     })
        // )
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);
    }

    // const [errors,setErrors]=useState({
    //     username:'',
    //     password:''
    // });

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.ing}>
                    <div className={style.carac}>{/*Pokemon.includes(raza) ? throw new Error : */}
                        <label htmlFor='Raza' className={style.label0}>Raza:  </label>
                        <label htmlFor='Raza' className={style.label1}>Raza:  </label>
                        <input type='text' name='raza' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Imagen' className={style.label0}>Imagen:  </label>
                        <label htmlFor='Imagen' className={style.label1}>Imagen:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='Tipo1' className={style.label0}>Tipo1:  </label>
                        <label htmlFor='Tipo1' className={style.label1}>Tipo1:  </label>
                        <input type='text' name='tipo1' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>{/*tipo1===tipo1 ? throw ne Error :*/}
                        <label htmlFor='Tipo2' className={style.label0}>Tipo2:  </label>
                        <label htmlFor='Tipo2' className={style.label1}>Tipo2:  </label>
                        <input type='text' name='tipo2' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='vida' className={style.label0}>Vida:  </label>
                        <label htmlFor='vida' className={style.label1}>Vida:  </label>
                        <input type='text' name='vida' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='ataque' className={style.label0}>Ataque:  </label>
                        <label htmlFor='ataque' className={style.label1}>Ataque:  </label>
                        <input type='text' name='ataque' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='ataqueespecial' className={style.label0}>AtaqueEspecial:  </label>
                        <label htmlFor='ataqueespecial' className={style.label1}>AtaqueEspecial:  </label>
                        <input type='text' name='ataqueespecial' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='defensa' className={style.label0}>Defensa:  </label>
                        <label htmlFor='defensa' className={style.label1}>Defensa:  </label>
                        <input type='text' name='defensa' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='defensaespecial' className={style.label0}>DefensaEspecial:  </label>
                        <label htmlFor='defensaespecial' className={style.label1}>DefensaEspecial:  </label>
                        <input type='text' name='defensaespecial' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='velocidad' className={style.label0}>Velocidad:  </label>
                        <label htmlFor='velocidad' className={style.label1}>Velocidad:  </label>
                        <input type='text' name='velocidad' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='altura' className={style.label0}>Altura:  </label>
                        <label htmlFor='altura' className={style.label1}>Altura:  </label>
                        <input type='text' name='altura' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {/* {errors.username && <p className={style.logp}>{errors.username}</p>} */}
                    </div>
                    <div className={style.carac}>
                        <label htmlFor='peso' className={style.label0}>Peso:  </label>
                        <label htmlFor='peso' className={style.label1}>Peso:  </label>
                        <input type='password' name='peso' value={userData.password} onChange={handleInputChange} className={style.lpe}></input>
                        {/* {errors.password && <p className={style.logp}>{errors.password}</p>} */}
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