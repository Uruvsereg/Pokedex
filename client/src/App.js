import './App.css';
// import react from 'react';
// import Formli from './components/form/login/login';
// import FormNu from './components/form/Usuario/usuario';
// import Inicio from './components/Principales/Home/inicio';
import Creacion from './components/form/pokenuevo/Pokenuevo';
// import Usuario from './components/Principales/Usuario/Usuario';
import Footer from './components/footer/footer';
import { Route, Switch, BrowserRouter/*, Routes/*, useLocation/*, useNavigate*/ } from 'react-router-dom';
// import { useState, /*useEffect*/ } from 'react';
// import { ADD } from './redux/actions';

function App() {
  
  return (
    // <BrowserRouter>
    <BrowserRouter>
    <div className="App">
      <Switch>
        {/* <Formli/> */}
        {/* <FormNu/> */}
        {/* <Inicio/> */}
        <Creacion/>
          {/* <Route path={'/'} element={<Formli/>}/> */}
          {/* <Route path={'/perfil/registro'} element={<FormNu/>}/> */}
          {/* <Route path={'/inicio'} element={<Inicio/>}/> */}
          {/* <Route path={'pokemon/pokenuevo'} element={<Creacion/>}/> */}
          {/* <Route path = {`/perfil`} component = {<Usuario/>}/> */}
      </Switch>
      <div>
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
    // </BrowserRouter>
  )
}

export default App;
// const location = useLocation();
// const [pokemons, SetPokemons] = useState(ADD);
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