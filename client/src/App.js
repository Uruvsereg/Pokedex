import './App.css';
// import react from 'react';
// import Formli from './components/form/login/login';
import Inicio from './components/Principales/Home/inicio' 
import NAV from './components/Nav/navbar';
// import Creacion from './components/Principales/Pokreacion/Pokrea';
import Footer from './components/footer/footer';
// import { useState, useEffect } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// function App() {
  // const location = useLocation();
  // const Navigate = useNavigate();
//   const [pokemons, SetPokemons] = useState([]);
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

//   const onSearch = (pokemon) => {
//     fetch(`http://localhost:3001/pokemon/onsearch/${pokemon}`)
//     .then((response) => response.json())
//     .then((data) =>{
//       console.log(data);
//       if(data.id){
//         SetPokemons((oldPokes) => [...oldPokes, data]);
//       }
//       else{
//         alert('No existeun pokemon con ese id')
//       }
//     })
//     .catch(err => console.log(err))
//   }

//   const onClose = (id) => {
//     SetPokemons(
//       pokemons.filter(pokemon => pokemon.id !== id)
//     )
//   }

// }

// export default App;

function App() {
  return (
    <div className="App">
      <div>
        {/* <Formli/> */}
        <Inicio/>
        <NAV/>
        {/* <Creacion/> */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
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