import { useState } from "react";
import style from './usuario.module.css';
import validation from "./validations";

const FormNu=({login})=>{
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
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.login}>
                    <div className={style.user}>
                        <div className={style.loginu}>
                            <label htmlFor='username' className={style.label1}>Nombre:  </label>
                            <label htmlFor='username' className={style.label2}>Nombre:  </label>
                            <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                            {errors.username && <p className={style.logp}>{errors.username}</p>}
                        </div>
                        <div className={style.loginu}>
                            <label htmlFor='nickname' className={style.label1}>Apellido:  </label>
                            <label htmlFor='nickname' className={style.label2}>Apellido:  </label>
                            <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                            {errors.username && <p className={style.logp}>{errors.username}</p>}
                        </div>
                    </div>
                    <div className={style.user1}>
                        <div className={style.loginu}>
                            <label htmlFor='nickname' className={style.label1}>Nickname:  </label>
                            <label htmlFor='nickname' className={style.label2}>Nickname:  </label>
                            <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                            {errors.username && <p className={style.logp}>{errors.username}</p>}
                        </div>
                        <div className={style.loginu}>
                            <label htmlFor='correo' className={style.label1}>Correo:  </label>
                            <label htmlFor='correo' className={style.label2}>Correo:  </label>
                            <input type='text' name='correo' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                            {errors.username && <p className={style.logp}>{errors.username}</p>}
                        </div>
                    </div>
                    <div className={style.pas}>
                        <div className={style.loginu}>
                            <label htmlFor='password' className={style.label1}>Password:  </label>
                            <label htmlFor='password' className={style.label2}>Password:  </label>
                            <input type='text' name='password' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                            {errors.username && <p className={style.logp}>{errors.username}</p>}
                        </div>
                    </div>
                    <div className={style.paco}>
                        <div className={style.loginu}>
                            <label htmlFor='password' className={style.label1}> Confirma Password:  </label>
                            <label htmlFor='password' className={style.label2}> Confirma Password:  </label>
                            <input type='password' name='password' value={userData.password} onChange={handleInputChange} className={style.lue}></input>
                            {errors.password && <p className={style.logp}>{errors.password}</p>}
                        </div>
                    </div>
                </div>
                <div className={style.bot}>
                    <button>Registro</button>
                </div>
            </form>
        </div>
    )
}
export default FormNu;