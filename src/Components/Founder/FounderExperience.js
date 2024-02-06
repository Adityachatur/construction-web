import React, { useState, useEffect } from 'react';
import img2 from '../images/home4.jpg';
import img3 from '../images/home3.jpg';
import img4 from '../images/home5.jpg';

const FounderExperience = () => {
    const images = [img2, img3, img4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next image index
            const nextIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextIndex);
        }, 4000); // 4 seconds interval

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    return (
        <div className='my-20'>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-full sm:w-5/12 flex justify-center sm:justify-end relative '>
                    <img src={images[currentImageIndex]} className='m-3 max-w-mobile-img sm:max-w-lg' alt="" />
                    {/* Polygon Background */}
                    <div className="polygon-background-Founderexperience"></div>
                </div>

                <div className='w-full sm:w-6/12 p-2 sm:p-10'>
                    <div className='w-full sm:w-80 border-l-8 border-yellow-500 h-auto sm:h-40 pl-3 pt-3 space-y-2'>
                        <h1 className='text-7xl font-bold text-yellow-500'>25</h1>
                        <p className='text-2xl font-bold '>YEARS OF EXPERIENCE</p>
                    </div>
                    <p className='lg:text-5xl md:text-2xl text-xl font-bold pt-4'>
                        Improving quality of life with an integrated unified approach.
                    </p>
                    <p className="pt-4 text-xl leading-8 sm:text-left">
                        Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                    </p>
                    <div className='flex flex-wrap sm:flex-row justify-around items-center h-32 space-x-3 space-y-4 mx-auto'>
                        <p className='text-xl font-bold text-center'>Sign Here,</p>
                        <h1 className='text-xl font-bold text-center'> David Houker <br /><span className='text-lg font-semibold'>Architect and Founder</span></h1>
                        <button className='button'>Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FounderExperience;
