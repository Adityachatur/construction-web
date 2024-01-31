import React from 'react';
import building from '../images/building.png';

const Projectnumbers = () => {
    return (
        // <div className="container flex flex-wrap h-auto space-x-2 mx-auto">
        //     <div className="sm:flex lg:w-full justify-evenly lg:flex-row">
        //         {/* For larger screens, display in a row */}
        //         <div className="flex flex-col sm:flex-row">
        //             <img src={building} className="text-yellow-500 h-14 my-6 mx-2" />
        //             <p className="mt-5 relative text-5xl font-bold font-Montserrat cursor-pointer">
        //                 500<br /> 
        //                 <span className="text-base absolute top-10 left-0 right-0" style={{ width: "105px" }}>Project Done.</span>
        //             </p>
        //         </div>
        //         <div className="flex flex-col sm:flex-row">
        //             <img src={building} className="text-yellow-500 h-14 my-6 mx-2" />
        //             <p className="mt-5 relative text-5xl font-bold font-Montserrat cursor-pointer">
        //                 500<br /> 
        //                 <span className="text-base absolute top-10 left-0 right-0" style={{ width: "105px" }}>Project Done.</span>
        //             </p>
        //         </div>
        //         {/* For larger screens, display in a row */}
        //         <div className="flex flex-col sm:flex-row">
        //             <img src={building} className="text-yellow-500 h-14 my-6 mx-2" />
        //             <p className="mt-5 relative text-5xl font-bold font-Montserrat cursor-pointer">
        //                 500<br /> 
        //                 <span className="text-base absolute top-10 left-0 right-0" style={{ width: "105px" }}>Project Done.</span>
        //             </p>
        //         </div>
        //         <div className="flex flex-col sm:flex-row">
        //             <img src={building} className="text-yellow-500 h-14 my-6 mx-2" />
        //             <p className="mt-5 relative text-5xl font-bold font-Montserrat cursor-pointer">
        //                 500<br /> 
        //                 <span className="text-base absolute top-10 left-0 right-0" style={{ width: "105px" }}>Project Done.</span>
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <>

            <div className='flex flex-wrap justify-evenly mt-10' >

                <div className='w-56 h-auto mt-2 mx-2'>

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
                        <img src={building} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                500
                            </p> <span className='text-lg'>Project Done.</span>
                        </div>
                    </div>
                </div>
                <div className='w-56 h-auto mt-2 mx-2'>

                    <div className="flex">
                        <img src={building} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                500
                            </p> <span className='text-lg'>Project Done.</span>
                        </div>
                    </div>
                </div>
                <div className='w-56 h-auto mt-2 mx-2'>
                    <div className="flex">
                        <img src={building} alt='' className="text-yellow-500 h-14 my-6 mx-2" />
                        <div className='flex flex-col'>
                            <p className="mt-5  lg:text-5xl text-2xl font-bold font-Montserrat cursor-pointer">
                                500
                            </p> <span className='text-lg'>Project Done.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projectnumbers;
