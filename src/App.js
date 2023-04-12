import logo from './logo.svg';
import './App.css';
import { Route, HashRouter, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <HashRouter>  
    <NavBar/>
    <Routes>
        {/* <Route exact path='/:id-:marca-:modelo' element={<CarDetails card={card} />} /> */}
        <Route exact path='/:id' element={<CarDetails/>} />
        <Route path='/' element={<Home/> }/>
        {/* <Route path='/contact' element={ <ContactForm/>} /> */}
        <Route path='/about-us' element={ <AboutUs/>} />
        
    </Routes>
    <Footer/>

</HashRouter>
  );
}

export default App;
