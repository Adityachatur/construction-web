import React, { useState, useEffect } from 'react';
import img1 from '../images/home1.jpg';
import img2 from '../images/home2.jpg';
import img3 from '../images/home4.jpg';
import Card from './Card';
import AboutCompany from '../About/AboutCompany';

const images = [img1, img2, img3];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="home flex items-center relative overflow-hidden">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-opacity duration-3000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="text-black z-10 lg:ml-28 lg:mb-28">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">FROM CONCEPT TO <br /> CREATION.</h1>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl">It is the long estabilish fact that a reader will be distracted <br />by the readable content</p>
                    <button className='button mt-2'>More Information</button>
                    <button className='button mt-2 ml-4'> Contact Us </button>
                </div>
            </div>
            <Card />
<AboutCompany/>
        </div>
    );
};

export default Home;
