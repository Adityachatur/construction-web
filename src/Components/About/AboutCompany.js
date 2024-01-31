import React, { useState, useEffect } from 'react';
import img1 from '../images/home4.jpg';
import img2 from '../images/home2.jpg';
import img3 from '../images/home3.jpg';
import Projectnumbers from './Projectnumbers';
import Heading from '../Heading';

const AboutCompany = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img1, img2, img3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=' aboutcompany w-full my-4  md:px-0 relative'>
            <Heading about="About" company="Company"/>
            <div className='relative flex flex-wrap z-10'>
                <div className="lg:w-8/12 w-full h-auto flex justify-center lg:justify-end">
                    <img src={images[currentImageIndex]} className="object-cover h-auto w-full lg:w-auto" style={{ maxHeight: "420px" }} alt="" />
                </div>

                <div className="lg:w-4/12 w-full h-auto mt-4 flex justify-center lg:justify-start lg:mt-0">
                    <div className="bg-yellow-500 shadow-lg overflow-hidden lg:w-80 md:w-full lg:mx-3 mx-auto p-7">
                        <h2 className="text-3xl font-base text-left ">Commited <span className='font-bold text-3xl'>to</span></h2>
                        <h2 className='font-bold text-3xl'>superior quality <br /> and result</h2>
                        <p className='text-left text-lg mt-2 font-base'>
                            Contrary to popular belief, lorem Ipsum is not simply text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                        <button className='button mt-4'>Read More</button>
                    </div>
                </div>
            </div>
            <Projectnumbers />

            {/* Polygon Background */}
            <div className="absolute top-0 left-0 w-full h-full polygon-background-AboutCompany" style={{ backgroundImage: `url(${img2})` }}></div>
        </div>
    );
};

export default AboutCompany;
