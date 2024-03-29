import { faGreaterThan, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Link, useLocation } from 'react-router-dom'

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const togglesidebar = () => {
    setShowSidebar(!showSidebar);
  }
  let location = useLocation();
  useEffect(() => {

  }, [location])


  return (
    <>
      <div className='container sticky top-0 z-50 flex justify-between items-center p-2 bg-black w-full md:w-8/12 mx-auto'>

        {/* Menu icon */}
        <div className="menu-icon text-white md:hidden" onClick={togglesidebar}>
          <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
        </div>

        {/* Navigation menu */}
        <div className={`menu-items nav md:flex md:flex-row text-white font-bold lg:text-lg sm:text-base space-x-5 ${showMenu ? 'text-base flex' : 'hidden'}`}>
          <span className="item"><Link to={'/'} className={` ${location.pathname === "/" ? "active" : ""}`} style={{ color: location.pathname === "/" ? "red" : "" }}>Home</Link></span>
          <span className="item"><Link to={'/about'} className={`${location.pathname === "/about" ? "active" : ""}`} style={{ color: location.pathname === "/about" ? "red" : "" }}>About Us</Link></span>
          <span className="item"><Link to={'/service'} className={`${location.pathname === "/service" ? "active" : ""}`} style={{ color: location.pathname === "/service" ? "red" : "" }}>Services</Link></span>
          <span className="item"><Link to={'/project'} className={`${location.pathname === "/project" ? "active" : ""}`} style={{ color: location.pathname === "/project" ? "red" : "" }}>Projects</Link></span>

        </div>

        {/* Search and greater than icons */}
        <div className="  items-center space-x-8 pr-4 text-white text-lg ">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faGreaterThan} onClick={togglesidebar} />
        </div>

      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={togglesidebar} />
    </>


  )
}

export default Navbar2
