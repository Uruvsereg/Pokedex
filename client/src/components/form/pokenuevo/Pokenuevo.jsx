import { useState } from "react";
import style from './usuario.module.css';
import validation from "./validations";

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
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);
    }

    const [errors,setErrors]=useState({
        username:'',
        password:''
    });

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.ing}>
                    <div className={style.loginu}>
                        <label htmlFor='username' className={style.label1}>Nombre:  </label>
                        <label htmlFor='username'>nombre:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginu}>
                        <label htmlFor='nickname' className={style.label1}>Apellido:  </label>
                        <label htmlFor='nickname'>Apellido:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginu}>
                        <label htmlFor='nickname' className={style.label1}>Correo:  </label>
                        <label htmlFor='nickname'>Correo:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginu}>
                        <label htmlFor='nickname' className={style.label1}>Nickname:  </label>
                        <label htmlFor='nickname'>Nickname:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginu}>
                        <label htmlFor='nickname' className={style.label1}>Password:  </label>
                        <label htmlFor='nickname'>Password:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginp}>
                        <label htmlFor='password' className={style.label1}> Confirma Password:  </label>
                        <label htmlFor='password'> Confirma Password:  </label>
                        <input type='password' name='password' value={userData.password} onChange={handleInputChange} className={style.lpe}></input>
                        {errors.password && <p className={style.logp}>{errors.password}</p>}
                    </div>
                </div>
                <div className={style.bot}>
                    <button></button>
                </div>
            </form>
        </div>
    )
}
export default Formli;