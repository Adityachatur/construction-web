import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = ({ showSidebar, toggleSidebar }) => {

    const location = useLocation();

    useEffect(() => {

    }, [location])

    return (
        <div>
            <div className={`bg-white  text-black fixed inset-y-0 right-0 h-full w-64 z-50 transition-transform duration-300 transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`} >
                <div className="p-4">

                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faTimes} className="text-black cursor-pointer text-2xl hover:text-yellow-500 transition-colors duration-200" onClick={toggleSidebar} />
                    </div>
                    <div className='text-center my-32'>
                        <div className='list-none space-y-4 mb-3 text-xl font-bold text-left'>
                            <li className='menu-item'><Link to={'/'} className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} style={{ color: location.pathname === "/" ? "red" : "" }}>Home</Link></li>
                            <li className='menu-item'><Link to={'/about'} className={`nav-link  ${location.pathname === "/about" ? "active" : ""}`} style={{ color: location.pathname === "/about" ? "red" : "" }}>About Us</Link></li>
                            <li className='menu-item'><Link to={'/service'} className={`${location.pathname === "/service" ? "active" : ""}`} style={{ color: location.pathname === "/service" ? "red" : "" }}>Services</Link></li>
                            <li className='menu-item'><Link to={'/project'} className={`${location.pathname === "/project" ? "active" : ""}`} style={{ color: location.pathname === "/project" ? "red" : "" }}>Projects</Link></li>
                            <li className='menu-item'>Contact</li>
                        </div>
                        <div className='sidebar-icon'>
                            <FontAwesomeIcon icon={faPhone} /> <br />
                            <h2>Phone Number</h2>
                            <h3>+91 9552314201</h3>
                        </div>
                        <br /><br />
                        <div className='sidebar-icon'>
                            <FontAwesomeIcon icon={faEnvelope} /> <br />
                            <h2>Email Address</h2>
                            <h3>Adityachatur7996@gmail.com</h3>
                        </div>
                        <br /><br />
                        <div className='sidebar-icon'>
                            <FontAwesomeIcon icon={faLocationDot} /> <br />
                            <h2>Location</h2>
                            <h3>Chakan , Pune 410501</h3>
                        </div>
                        <br /><br />
                        <div className='space-x-2'>
                            <FontAwesomeIcon icon={faFacebook} className='bg-gray-300 p-1 rounded-md hover:bg-blue-500 hover:text-white' />
                            <FontAwesomeIcon icon={faInstagram} className='bg-gray-300 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                            <FontAwesomeIcon icon={faTwitter} className='bg-gray-300 p-1 rounded-md hover:text-white hover:bg-blue-500' />
                            <FontAwesomeIcon icon={faYoutubeSquare} className='bg-gray-300 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                            <FontAwesomeIcon icon={faLinkedin} className='bg-gray-300 p-1 rounded-md hover:text-white hover:bg-blue-700' />
                            <FontAwesomeIcon icon={faGoogle} className='bg-gray-300 p-1 rounded-md hover:bg-blue-300 hover:text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
