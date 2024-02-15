
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar1 from './Components/Navbar/Navbar1';
import Navbar2 from './Components/Navbar/Navbar2';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
