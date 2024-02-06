import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from '../images/dot-pattern.png';
import Heading from '../Heading';

import trainer1 from '../images/teamperson1.jpg';
import trainer2 from '../images/Teamperson2.jpg';
import trainer3 from '../images/Teamperson3.jpg'; // Corrected image import
import trainer4 from '../images/Teamperson4.jpg';
import trainer5 from '../images/Teamperson5.jpg'; // Corrected image import

const OurTeam = () => {
    const cardData = [
        { imageUrl: trainer1, name: 'Avie Beaton', position: 'CEO & Architect' },
        { imageUrl: trainer2, name: 'Ben Jonson', position: 'Architect' },
        { imageUrl: trainer3, name: 'Ashley Fletcher', position: 'Finances' },
        { imageUrl: trainer4, name: 'Gabriela Flores', position: 'Mechanical Engineer' },
        { imageUrl: trainer5, name: 'Dany Pandit', position: 'Presentation' }, // Corrected name and position
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const slideInAnimation = {
        animation: 'slideIn 0.3s ease-in-out forwards',
        height: '150px'
    };

    return (
        <div className='my-16'>
            <div className='w-full' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '450px', }}>
                <div className='text-center my-5'>
                    <Heading about="Our" company="Team" />
                    <h1 className='text-5xl font-bold pb-2'>Discover our trustworthy team and experts</h1> {/* Edited heading */}
                </div>

                <div className='w-10/12 mx-auto'>
                    <Slider {...settings}>
                        {cardData.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="mx-3 shadow-md bg-red-800 ">
                                    <img src={item.imageUrl} alt={`Team Member ${index + 1}`} className="w-full object-cover" />
                                </div>

                                {hoveredIndex === index && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-65 text-center py-3 mx-3 border-t-4 border-gray-700 "
                                        style={slideInAnimation}
                                    >
                                        <p className="text-2xl text-white font-semibold mt-7 font-Oswald"> {item.name} </p>
                                        <p className="text-lg text-white font-semibold mt-1 font-Oswald"> {item.position} </p> <br />
                                        <p className='text-white text-base font-Roboto space-x-2'>
                                            <FontAwesomeIcon icon={faFacebook} className='bg-gray-800 p-1 h-6 rounded-md hover:bg-blue-500 hover:text-white' />
                                            <FontAwesomeIcon icon={faInstagram} className='bg-gray-800 h-6 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                                            <FontAwesomeIcon icon={faTwitter} className='bg-gray-800 h-6 p-1 rounded-md hover:text-white hover:bg-blue-500' />
                                            <FontAwesomeIcon icon={faYoutubeSquare} className='bg-gray-800 h-6 p-1 rounded-md hover:bg-red-500 hover:text-white' />
                                            <FontAwesomeIcon icon={faLinkedin} className='bg-gray-800 h-6 p-1 rounded-md hover:text-white hover:bg-blue-700' />
                                            <FontAwesomeIcon icon={faGoogle} className='bg-gray-800 h-6 p-1 rounded-md hover:bg-blue-300 hover:text-white' />
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
