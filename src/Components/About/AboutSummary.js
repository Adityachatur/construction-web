import React from 'react';
import Heading from '../Heading';
import img1 from '../images/home3.jpg';

const AboutSummary = () => {
    return (
        <div>
            <div className='w-full h-full bg-black text-white'>
                <Heading about="About" company="Summary" />
                <div className=''>
                    <div className='lg:w-10/12 w-full flex flex-wrap justify-between mx-auto my-10'>
                        <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center'>
                            <img src={img1} alt="" className='lg:mr-auto  sm:mr-0' style={{ height: "350px", width: "300px" }} />
                        </div>
                        <div className='w-full lg:w-6/12 p-5 h-72 my-auto bg-gray-900 text-white'>
                            <h1 className='text-2xl font-bold'>2011-2012</h1>
                            <p className='text-2xl font-bold'>Eisenhower Memorial</p>
                            <p className='font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-10/12 w-full flex flex-wrap justify-between mx-auto my-10'>
                        <div className='w-full lg:w-6/12 p-5 h-72 my-auto bg-gray-900 text-white'>
                            <h1 className='text-2xl font-bold'>2013-2014</h1>
                            <p className='text-2xl font-bold'>Columbia Sport Center</p>
                            <p className='font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Remaining essentially unchanged.
                            </p>
                        </div>
                        <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center'>
                            <img src={img1} alt="" className='lg:ml-auto  sm:ml-0' style={{ height: "350px", width: "300px" }} />
                        </div>
                    </div>
                    <div className='lg:w-10/12 w-full flex flex-wrap justify-between mx-auto my-10'>
                        <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center'>
                            <img src={img1} alt="" className='lg:mr-auto  sm:mr-0' style={{ height: "350px", width: "300px" }} />
                        </div>
                        <div className='w-full lg:w-6/12 p-5 h-72 my-auto bg-gray-900 text-white'>
                            <h1 className='text-2xl font-bold'>2015-2016</h1>
                            <p className='text-2xl font-bold'>Park Boathouse</p>
                            <p className='font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-10/12 w-full flex flex-wrap justify-between mx-auto mt-10'>
                        <div className='w-full lg:w-6/12 p-5 h-72 my-auto bg-gray-900 text-white'>
                            <h1 className='text-2xl font-bold'>2017-2018</h1>
                            <p className='text-2xl font-bold'>Museum Expansion</p>
                            <p className='font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Remaining essentially unchanged.
                            </p>
                        </div>
                        <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center'>
                            <img src={img1} alt="" className='lg:ml-auto  sm:ml-0' style={{ height: "350px", width: "300px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSummary;
