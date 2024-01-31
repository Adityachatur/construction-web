import React from 'react'
import Heading from '../Heading'
import img1 from '../images/card-crane.png'
const OurService = () => {
    return (
        <div>
            <Heading about="Our" company="Services" />
            <h1 className=' w-10/12 mx-auto text-left text-xl font-bold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h1>
            <div className='my-5'>
                <div className=' flex flex-wrap w-9/12 mt-5 mx-auto'>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Building Construction</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>

                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Building Renovation</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Building Maintenance</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Architecture Design
                        </h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>

                </div>
                <div className=' flex flex-wrap w-9/12 mx-auto'>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Construction Consultant</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>

                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Material Supply</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>House Renovation</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>
                    <div className='lg:w-1/4 md:w-1/3 sm:w-1/3 border-x-2 p-3 border-gray-300 service-cardhover'>
                        <img src={img1} className="lg:h-24 lg:m-6 md:h-16 md:m-3 h-14 m-2 zoom" alt="" />
                        <h1 className='text-xl font-bold p-3'>Interior Design</h1>
                        <p className='text-md py-2 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur repellat voluptatem!</p>
                        <h3 className='text-xl font-bold px-3 py-1'>Read More </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService
