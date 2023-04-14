import style from './footer.module.css';

const Footer = () => {
    return(
        <footer className={style.footer}>
            <a href="https://www.soyhenry.com/" rel="noopener">Henry</a>
            <a href="https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-750aa6168/" rel="noopener">Uruscript</a>
            {/* <a href="https://www.soyhenry.com/"  target="_blank">Henry</a> ----------> al usar esta forma crea una nueva pestaña en el navegador, genera advertencia en el código y no queda limpio 
            <a href="https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-750aa6168/"  target="_blank">Uruscript</a> */}
        </footer>
    )
}
export default Footer;