import logo from './logo.svg';
import { useState, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modal from './components/Modal';
import Popular from './components/Popular';
import Categories from './components/Categories';
import Instructors from './components/Instructors';
import Archievements from './components/Archievements';
import Join from './components/Join';
import Footer from './components/Footer';
import ScrollToTOp from './components/ScrollToTOp';
import Signuppage from './components/Signuppage';
import SignIn from './components/SignIn';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(prev => !prev)

  }

  return (

    <div className="App relative">
      <Navbar
        toggle={toggle}
        handleToggle={handleToggle} />
      <Hero />

      <Modal
        toggle={toggle}
        handleToggle={handleToggle} />
      <div className={toggle ? "relative" : "fixed"}>

        <Popular />
        <Categories />
        <Instructors />
        <Archievements />
        <Join />
        <Footer />
        <ScrollToTOp />

        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signuppage
            />}>
            </Route>
            <Route path='/login' element={<SignIn
            />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ div>
  );
}

export default App;
