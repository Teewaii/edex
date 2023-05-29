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
export const ToggleContext = createContext(" ")


function App() {

  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(prev => !prev)

  }

  // <ToggleContext.Provider value={{ toggle, handleToggle }}>
  //   <Navbar />
  // </ToggleContext.Provider>
  return (

    <div className="App relative">
      <Navbar
        toggle={toggle}
        handleToggle={handleToggle} />
      <Hero />
      <Modal
        toggle={toggle}
        handleToggle={handleToggle} />
      <Popular />
      <Categories />
      <Instructors />
      <Archievements />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
