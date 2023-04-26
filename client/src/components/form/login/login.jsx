import { useState } from "react";
import style from './login.module.css';
import validation from "./validations";
import { Link, NavLink } from 'react-router-dom';

const Formli=({login})=>{
    const [userData, setUserData]=useState({
        nombre:'',
        apellido:'',
        correo:'',
        nickname:'',
        password:''
    });

    const handleInputChange = (event) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const [errors,setErrors]=useState({
        username:'',
        password:''
    });

    return(
        <div className={style.pag}>
            <form onSubmit={handleSubmit}>
                <div className={style.ingreso}>
                    <div className={style.loginu}>
                        <label htmlFor='username' className={style.label1}>Usuario:</label>
                        <label htmlFor='username'>Usuario:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginp}>
                        <label htmlFor='password' className={style.label1}> Contraseña:</label>
                        <label htmlFor='password'> Contraseña:  </label>
                        <input type='password' name='password' value={userData.password} onChange={handleInputChange} className={style.lpe}></input>
                        {errors.password && <p className={style.logp}>{errors.password}</p>}
                    </div>
                    <div className={style.ingresob}>
                        <div className={style.reg}>
                            <button><NavLink to='perfil/registro' >Registro</NavLink></button>
                        </div>
                        <div className={style.inv}>
                            <button><Link to='inicio'>Invitado</Link></button>
                        </div>
                        <div className={style.bot}>
                            <button><Link to='inicio'></Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Pokeapi</h1>
                </div>
            </form>
        </div>
    )
}
export default Formli;