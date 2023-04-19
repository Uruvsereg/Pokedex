import style from './footer.module.css';
// import icono from '../../Multimedia/IMG';

const Footer = () => {
    return(
        <footer className={style.footer}>
            <a className={style.a1} href="https://www.soyhenry.com/" rel="noopener">.</a>
            <a className={style.a2} href="https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-750aa6168/" rel="noopener">.</a>
            <a className={style.a3} href="https://twitter.com/uruscript" rel="noopener">.</a>
            <a className={style.a4} href="https://github.com/Uruscript" rel="noopener">.</a>
            {/* <a href="" rel="noopener"></a> */}
            {/* <a href="https://www.soyhenry.com/"  target="_blank">Henry</a> ----------> al usar esta forma crea una nueva pestaña en el navegador, genera advertencia en el código y no queda limpio 
            <a href="https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-750aa6168/"  target="_blank">Uruscript</a> */}
        </footer>
    )
}
export default Footer;