import React from 'react'
import logo from '../images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='w-full mx-auto px-4 lg:w-9/12 flex flex-wrap'>

                <div className='w-full md:w-1/2 lg:w-1/3 mt-10 mb-5'>
                    <div className='flex items-center'>
                        <img src={logo} alt="Homo Build" className='h-20' />
                        <span className='ml-2 text-white text-xl'>Homo Build <br /> lets Go!</span>
                    </div>
                    <p className='text-white mt-3 text-lg'>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                    <div className='flex space-x-2 mt-4'>
                        <FontAwesomeIcon icon={faFacebook} className='text-white h-5 p-1 rounded-md hover:bg-blue-500 hover:text-white' />
                        <FontAwesomeIcon icon={faInstagram} className='text-white h-5 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                        <FontAwesomeIcon icon={faTwitter} className='text-white h-5 p-1 rounded-md hover:text-white hover:bg-blue-500' />
                        <FontAwesomeIcon icon={faYoutubeSquare} className='text-white h-5 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-white h-5 p-1 rounded-md hover:text-white hover:bg-blue-700' />
                        <FontAwesomeIcon icon={faGoogle} className='text-white h-5 p-1 rounded-md hover:bg-blue-300 hover:text-white' />
                    </div>
                </div>

                <div className='w-full md:w-1/2 lg:w-1/3 mt-10 mb-5 text-white text-center'>
                    <h1 className='text-3xl font-bold'>Contact Us</h1>
                    <div className='list-none space-y-4 mt-4 text-xl'>
                        <li className='footer-list'><span>Chakan, Pune 410501</span></li>
                        <li className='footer-list'><span>adityachatur7996@gmail.com</span></li>
                        <li className='footer-list'><span>+91 9552314201</span></li>
                        <li className='footer-list'><span>+91 7798834026</span></li>
                    </div>
                </div>

                <div className='w-full md:w-1/2 lg:w-1/3 mt-10 mb-5 text-white text-center md:text-left  lg:pl-20'>
                    <h1 className='text-3xl font-bold'>Useful Links</h1>
                    <div className='list-none space-y-4 mt-4 text-xl'>
                        <li className='footer-list'><span><Link to={'/'}>Home</Link></span></li>
                        <hr className='border-dashed' />
                        <li className='footer-list'><span><Link to={'/about'}>About</Link></span></li>
                        <hr className='border-dashed' />
                        <li className='footer-list'><span><Link to={'/contact'}>Contact</Link></span></li>
                        <hr className='border-dashed' />
                        <li className='footer-list'><span><Link to={'/service'}>Service</Link></span></li>
                        <hr className='border-dashed' />
                    </div>
                </div>
            </div>

            <div className='w-full bg-white text-black text-center text-lg font-bold py-3'>
                <h3> <span className='text-red-900'>@</span> 2024 Home Build. Designed by Aditya Chatur. All rights reserved.</h3>
            </div>
        </div>
    )
}

export default Footer;
