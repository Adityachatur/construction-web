// Founderdetail.jsx

import React from 'react';
import img1 from '../images/home1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Founderdetail = () => {
  return (
    <div className='my-20'>
      <div className='flex flex-wrap'>

        <div className='w-full sm:w-6/12 flex justify-center sm:justify-end relative'>
          <img src={img1} className='m-3' style={{ maxHeight: "300px" }} alt="" />
          {/* Polygon Background */}
          <div className="polygon-background-Founder"></div>
        </div>

        <div className='w-full sm:w-5/12 p-2 sm:p-10'>
          <h1 className='text-4xl font-bold  md:text-left'><span className='text-xl'>We will provide  </span>you  the best <br /> work which you dreamt for!</h1>
          <p className="pt-4 text-xl leading-8 sm:text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many variations of passages of Ipsum available,</p>

          <div className='mt-5 space-y-2 lg:text-2xl sm:text-md sm:text-left'>
            <FontAwesomeIcon icon={faGreaterThan} /> <span className='hover:text-yellow-400 transition-colors duration-400'>Construction Management</span> <br />
            <FontAwesomeIcon icon={faGreaterThan} /> <span className='hover:text-yellow-400 transition-colors duration-400'>Pre Construction Services</span> <br />
            <FontAwesomeIcon icon={faGreaterThan} /> <span className='hover:text-yellow-400 transition-colors duration-400'>Contract Administration</span> <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founderdetail;

