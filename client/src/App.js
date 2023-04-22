import './App.css';
import style from './App.module.css'
import react from 'react';
import Formli from './components/form/login/login';
// import FormNu from './components/form/Usuario/usuario';
import Inicio from './components/Principales/Home/inicio';
import Detalles from './components/Principales/Detalles/Detalles';
import Creacion from './components/form/pokenuevo/Pokenuevo';
// import Usuario from './components/Principales/Usuario/Usuario';
import Footer from './components/footer/footer';
import { Route, Routes/*, useLocation/*, useNavigate*/ } from 'react-router-dom';
// import { useState, /*useEffect*/ } from 'react';
// import { POKEALL } from './redux/actions';

function App() {
  return (
    <div className="App">
    <Routes>
                  {/* <Formli className={style.landing}/> */}
      {/* <Route path = '/' className="landing">
        element={<Formli className={style.landing}/>}
      </Route> */}
            <Route path='/' element={<Formli className={style.landing}/>}/>
                  {/* <Inicio className={style.inicio}/> */}
      {/* <Route path = 'inicio' className="inicio">
        <Inicio className={style.inicio}/>
      </Route> */}
            <Route path='inicio' element={<Inicio className={style.inicio}/>}/>
                  {/* <Detalles className={style.detalles}/> */}
      {/* <Route path='pokemon/:id' className="detalles">
        element={<Detalles className={style.detalles}/>}
      </Route> */}
              <Route path = 'pokemon/:id' element={<Detalles className={style.detalles}/>}/>
                  {/* <Usuario className={style.perfil}/> */}
      {/* <Route path='/perfil' className="perfil">
        <Usuario/>
      </Route> */}
            {/* <Route path = 'perfil' element={<Usuario className={style.perfil}/>}/> */}
      {/* <Route path='pokemon/pokenuevo' className="pokenuevo">
        element={<Creacion className={style.pokenuevo}/>}
      </Route> */}
            <Route path = 'pokemon/pokenuevo' element={<Creacion className={style.pokenuevo}/>}/>
                  {/* <Creacion className={style.pokenuevo}/> */}
      {/* <Route path='/perfil/registro' className="registro">
        element={<FormNu className={style.registro}/>}
      </Route> */}
                  {/* <FormNu className={style.registro}/> */}
            {/* <Route path = 'perfil/registro' element={<FormNu className={style.registro}/>}/> */}
    </Routes>
        <div>
          <Footer/>
        </div>
      </div>
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