// import './App.css';
import Navbar from '../../sports-tracker/src/components/navbar/Navbar';
import Menu from '../src/components/menu/Menu'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>
  );
}

export default App;
