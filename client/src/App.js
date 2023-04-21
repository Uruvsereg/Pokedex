import './App.css';
import style from './App.module.css'
import react from 'react';
// import Formli from './components/form/login/login';
// import FormNu from './components/form/Usuario/usuario';
// import Inicio from './components/Principales/Home/inicio';
import Detalles from './components/Principales/Detalles/Detalles';
// import Creacion from './components/form/pokenuevo/Pokenuevo';
// import Usuario from './components/Principales/Usuario/Usuario';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Router/*, Switch/*, Routes/*, useLocation/*, useNavigate*/ } from 'react-router-dom';
// import { useState, /*useEffect*/ } from 'react';
// import { POKEALL } from './redux/actions';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Route path = '/' className="landing">
          <Formli className="landing"/>
        </Route> */}
              {/* <Formli className={style.landing}/> */}
        {/* <Route path = '/inicio' className="inicio">
          <Inicio/>
        </Route> */}
              {/* <Inicio className={style.inicio}/> */}
        {/* <Route path =${`pokemon/${id}`} className="inicio">
          <Inicio/>
        </Route> */}
              <Detalles className={style.detalles}/>
        {/* <Route path='/perfil'>
          <Usuario/>
          </Route> */}
              {/* <Usuario className={style.perfil}/> */}
        {/* <Route path='pokemon/pokenuevo'>
          <Creacion/>
        </Route> */}
              {/* <Creacion className={style.pokenuevo}/> */}
        {/* <Route path="/perfil/registro">
          <FormNu/>
        </Route> */}
              {/* <FormNu className={style.registro}/> */}
        <div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
// const location = useLocation();
// const [pokemons, SetPokemons] = useState(POKEALL);
// const Navigate = useNavigate();
// const [access, setAccess] = useState(false);

// const nickname = 'urvsereg';
// const password = '123456';

// const login = (userData) => {
//   if(userData.nickname === nickname && userData.password === password){
//     setAccess(true)
//     Navigate('/home');
//   }
// }

// useEffect(() =>{
//   !access && Navigate('/')
// },[access,Navigate])