
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar1 from './Components/Navbar/Navbar1';
import Navbar2 from './Components/Navbar/Navbar2';
import About from './Components/About/About';
function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
