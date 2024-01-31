import React from 'react'
import compass from '../images/card-compass.png'
import crane from '../images/card-crane.png'
import renovation from '../images/card-renovation.png'
const Card = () => {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row justify-center items-center gap-5 my-4">


                <div className=" card-hover  relative bg-gray-100 shadow-lg rounded-lg overflow-hidden w-72 md:w-80 lg:w-96 mx-1 ">
                    <h1 className='text-8xl font-bold text-right py-10 text-gray-400'>1</h1>
                    <img src={compass} className='zoom absolute  bottom-0 left-0 right-0  flex top-14 justify-center h-24 mx-auto bg-white rounded-full p-2' alt="" />
                    <div className="p-2">
                        <h2 className="text-xl text-center font-bold">Architecture Design</h2>
                        <p className="mt-2 text-center text-gray-600">lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                        <p className='text-center text-xl mt-2 font-bold '>Read More</p>
                    </div>
                </div>


                <div className=" card-hover  relative bg-gray-100 shadow-lg rounded-lg overflow-hidden w-72 md:w-80 lg:w-96 md:h-auto mx-1">
                    <h1 className='text-8xl font-bold text-right py-10 text-gray-400'>2</h1>
                    <img src={crane} className=' zoom absolute  bottom-0 left-0 right-0  flex top-14 justify-center h-24 mx-auto bg-white rounded-full p-2' alt="" />
                    <div className="p-2">
                        <h2 className="text-xl text-center font-bold">Building Construction</h2>
                        <p className="mt-2 text-center text-gray-600">lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                        <p className='text-center text-xl mt-2 font-bold '>Read More</p>
                    </div>
                </div>


                <div className=" card-hover relative bg-gray-100 shadow-lg rounded-lg overflow-hidden w-72 md:w-80 lg:w-96 mx-1">
                    <h1 className='text-8xl font-bold text-right py-10 text-gray-400'>3</h1>
                    <img src={renovation} className='zoom absolute  bottom-0 left-0 right-0  flex top-14 justify-center h-24 mx-auto bg-white rounded-full p-2' alt="" />
                    <div className="p-2">
                        <h2 className="text-xl text-center font-bold">Building Renovation</h2>
                        <p className="mt-2 text-center text-gray-600">lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                        <p className='text-center text-xl mt-2 font-bold '>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
