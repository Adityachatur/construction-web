import React from 'react';
import building from '../images/building.png';
import crane from '../images/card-crane.png';
import brush from '../images/brush.png';
import happyclient from '../images/happy-client.png'
const Projectnumbers = () => {
    return (
        <>

            <div className='flex flex-wrap justify-evenly mt-10' >

                <div className='lg:w-56  h-auto mt-2 mx-2'>
                    <div className="flex">
                        <img src={building} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5 lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                500
                            </p> <span className='text-lg'>Project Done.</span>
                        </div>
                    </div>
                </div>
                <div className='w-56 h-auto mt-2 mx-2'>
                    <div className="flex">
                        <img src={happyclient} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                450
                            </p> <span className='text-lg'>Happy Client.</span>
                        </div>
                    </div>
                </div>
                <div className='w-56 h-auto mt-2 mx-2'>

                    <div className="flex">
                        <img src={crane} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                300
                            </p> <span className='text-lg'>Industries Served.</span>
                        </div>
                    </div>
                </div>
                <div className='w-56 h-auto mt-2 mx-2'>
                    <div className="flex">
                        <img src={brush} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                100
                            </p> <span className='text-lg'>Renovate.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projectnumbers;
