import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.webp'
import React from 'react'

const Navbar1 = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 flex lg:justify-end items-center justify-center bg-white">
                    <img src={logo} alt="" className='h-24 w-auto items-end' />
                </div>
                {/* Display this part only on larger and medium screens */}
                <div className="hidden sm:flex lg:w-full bg-white lg:flex justify-evenly lg:flex-row lg:px-36">
                    <div className="flex">
                        <FontAwesomeIcon icon={faLocationDot} className=' text-yellow-500 h-8 my-6 mx-4 ' />
                        <p className='mt-5 lg:text-sm text-base font-Montserrat cursor-pointer '>PUNE, India<br /> 410501</p>
                    </div>
                    <div className="flex">
                        <FontAwesomeIcon icon={faPhone} className='h-8 my-6 mx-4 text-yellow-500 ' />
                        <p className='mt-5 lg:text-sm text-base font-Montserrat cursor-pointer '>+91 9552314201<br />mon - firday : 8 AM - 9 PM</p>
                    </div>
                    <div className="flex  my-auto">
                        <button className='button'>home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar1
