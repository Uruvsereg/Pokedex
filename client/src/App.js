import './App.css';
// import react from 'react';
// import FormNu from './components/form/Usuario/usuario';
// import Formli from './components/form/login/login';
import FormNu from './components/form/Usuario/usuario';
// import Inicio from './components/Principales/Home/inicio';
// import NAV from './components/Nav/navbar';
// import PokeBarra from './components/Borders/Poke/Poke';
// import Creacion from './components/Principales/Pokreacion/Pokrea';
import Footer from './components/footer/footer';
// import { useState, useEffect } from 'react';
 import { BrowserRouter, Route/*, BrowserRouter/*, useLocation/*, useNavigate*/ } from 'react-router-dom';

function App() {
  // const location = useLocation();
  // const Navigate = useNavigate();
  // const [pokemons, SetPokemons] = useState([]);
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

  const onSearch = (pokemon) => {
    fetch(`http://localhost:3001/pokemon/onsearch/${pokemon}`)
    .then((response) => response.json())
    .then((data) =>{
      console.log(data);
      if(data.id){
        SetPokemons((oldPokes) => [...oldPokes, data]);
      }
      else{
        alert('No existeun pokemon con ese id')
      }
    })
    .catch(err => console.log(err))
  }

//   const onClose = (id) => {
//     SetPokemons(
//       pokemons.filter(pokemon => pokemon.id !== id)
//     )
//   }

// }

// export default App;

  return (
    <BrowserRouter>
      <div className="App">
        {/* {location.pathname==='/'?<Formli/>:<PokeBarra/>} */}
        {/* <Route path={`/`} componenet={<Formli/>}/> */}
        {/* <Route path={`/inicio`} component={<Inicio onSearch={onSearch}/>}/> */}
        {/* <Route path={`pokemons/pokenuevo`} compkconent = {<Creacion/>}/> */}
        {/* <Route path = {`/perfil/${id}`} component = {<Usuario/>}/> */}
        {/* <Route path={`/perfil/registro`} component={<FormNu/>}/> */}
        <FormNu/>
          <div>
            <Footer/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
      /* </div>
      {/* {location.pathname === '/' ? <Formli login={login}/> : <NAV onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element={
          <div>
            <Pokemons
            onClose = {onClose}
            />
          </div>
        }/>
      </Routes> */