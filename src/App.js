import React from 'react'
import './App.css';
import Button from '../src/components/button/Button';
// import banner from './images/hitec.PNG';
// import lights from './images/lights.jpg';
import Profile from './components/profile/Profile';
import Footer from '../src/components/Footer/footer';
import Home from './components/Home';
import Contactme from './pages/Contact/contact';
import {
  Routes,
  Route,
} from "react-router-dom";
import Aboutme from '../src/pages/Aboutme/Aboutme';




function App() {
  return (
    <>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<Aboutme />} />
          <Route path='/profile' exact element={<Profile />}/>
          <Route path='/contact' exact element={<Contactme />}/>

        </Routes>
   
    </>
  
    
  );
}

export default App;
