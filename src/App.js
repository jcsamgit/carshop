import logo from './logo.svg';
import './App.css';
import { Route, HashRouter, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CarDetails from './components/CarDetails';
import Promotions from './components/Promotions';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <HashRouter>  
    <NavBar/>
    <Whatsapp/>
    <Routes>
        <Route exact path='/:id' element={<CarDetails/>} />
        <Route path='/' element={<Home/> }/>
        <Route path='/about-us' element={ <AboutUs/>} />
        <Route path='/promotions' element={<Promotions/>} />
        
    </Routes>
    <Footer/>

</HashRouter>
  );
}

export default App;
