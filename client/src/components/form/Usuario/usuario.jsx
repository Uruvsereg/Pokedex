import { useState } from "react";
import style from './usuario.module.css';
import validation from "./validations";

const FormNu = ({login}) => {
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

    const [errors,setErrors] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        nickname:'',
        password:''
    });

    const errores = errors.nombre||errors.apellido||errors.correo||errors.nickname||errors.password;

    return(
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.login}>
                    <div className={style.user}>
                        <div className={style.loginu}>
                            <label htmlFor='username' className={style.label1}>Nombre:  </label>
                            <label htmlFor='username' className={style.label2}>Nombre:  </label>
                            <input type='text' name='nombre' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.nombre && <span className={style.logp}>{errors.nombre}</span>}
                        </div>
                        <div className={style.loginu}>
                            <label htmlFor='userlastname' className={style.label1}>Apellido:  </label>
                            <label htmlFor='userlastname' className={style.label2}>Apellido:  </label>
                            <input type='text' name='apellido' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.apellido && <span className={style.logp}>{errors.apellido}</span>}
                        </div>
                    </div>
                    <div className={style.user1}>
                        <div className={style.loginu}>{/*Usuarios.includes(nickname) ? throw new Error : , además estar entre 3 y 20 caracteres*/}
                            <label htmlFor='nickname' className={style.label1}>Nickname:  </label>
                            <label htmlFor='nickname' className={style.label2}>Nickname:  </label>
                            <input type='text' name='nickname' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.nickname && <span className={style.logp}>{errors.nickname}</span>}
                        </div>
                        <div className={style.loginu}>{/*Usuarios.includes(correo) ? throw new Error : */}
                            <label htmlFor='correo' className={style.label1}>Correo:  </label>
                            <label htmlFor='correo' className={style.label2}>Correo:  </label>
                            <input type='text' name='correo' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.correo && <span className={style.logp}>{errors.correo}</span>}
                        </div>
                    </div>
                    <div className={style.pas}>{/*password.lenght >= 6 && <= 15 incluye al menos 1 mayúscula, 1 minúscula y 1 caracter especial*/}
                        <div className={style.loginu}>
                            <label htmlFor='password' className={style.label1}>Password:  </label>
                            <label htmlFor='password' className={style.label2}>Password:  </label>
                            <input type='text' name='password' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.password && <span className={style.logp}>{errors.password}</span>}
                        </div>
                    </div>
                    <div className={style.paco}>
                        <div className={style.loginu}>{/*pasword === passwordc ? : throw new Error*/}
                            <label htmlFor='passwordc' className={style.label1}> Confirma Password:  </label>
                            <label htmlFor='passwordc' className={style.label2}> Confirma Password:  </label>
                            <input type='password' name='passwordc' value={userData.value} onChange={handleInputChange} className={style.lue}></input>
                            {errors.password && <span className={style.logp}>{errors.password}</span>}
                        </div>
                    </div>
                </div>
                <div className={style.bot}>
                    {errores ? null : <button type='submit' >Registro</button>}
                </div>
            </form>
        </div>
    )
}
export default FormNu;