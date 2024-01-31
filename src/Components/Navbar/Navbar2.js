import { faGreaterThan, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const togglesidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <div className='container sticky top-0 z-50 flex justify-between items-center p-2 bg-black w-full md:w-8/12 mx-auto'>

        {/* Menu icon */}
        <div className="menu-icon text-white md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>

        {/* Navigation menu */}
        <div className={`menu-items nav md:flex md:flex-row text-white font-bold lg:text-lg sm:text-base space-x-5 ${showMenu ? 'flex flex-col' : 'hidden'}`}>
          <span className="item">Home</span>
          <span className="item">About Us</span>
          <span className="item">Service</span>
          <span className="item">Pages</span>
          <span className="item">Projects</span>
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
