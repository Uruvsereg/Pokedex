import Formli from './components/form/login/login';
// import FormNu from './components/form/Usuario/usuario';
import Inicio from './components/Principales/Home/inicio';
import Detalles from './components/Principales/Detalles/Detalles';
import Creacion from './components/form/pokenuevo/Pokenuevo';
// import Usuario from './components/Principales/Usuario/Usuario';
import Footer from './components/footer/footer';
import { Route, Routes/*, useLocation/*, useNavigate*/ } from 'react-router-dom';

function App() {
  
  const onSearch=(character)=> {
    fetch(`http://localhost:3001/pokemon/?name=${character}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.id) {
          setPokemons((pokemon) => pokemon.data);
        } else {
          alert('No hay pokemon con ese nombre');
        }
    })
    .catch(err => console.log(err))
  } 
  return (
    <div>
    <Routes>
      <Route path='/' element={<Formli/>}/>
      {/* <Route path='perfil/registro' element={<FormNu/>}/> */}
      <Route path='inicio' element={<Inicio/>}/>
      <Route path='pokemon/:id' element={<Detalles/>}/>
      <Route path='pokemon/pokenuevo' element={<Creacion/>}/>
      {/* <Route path='perfil' element={<Usuario/>}/> */}
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