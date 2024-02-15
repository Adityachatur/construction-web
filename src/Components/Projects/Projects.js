import React, { useState } from 'react';
import Heading from '../Heading';
import img1 from '../images/card-compass.png';
import img2 from '../images/card-renovation.png';
import img from '../images/home4.jpg';
import Footer from '../Footer/Footer';
import Mainheading from '../Mainheading';

// Component for individual card
const Card = ({ img, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-96 h-96 border rounded-md shadow-md p-4 mx-4 my-4 service-cardhover relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={img}
                className="h-full py-5 mx-auto"
                style={{ transform: isHovered ? 'scale(0.5)' : 'scale(1)' }}
                alt=""
            />
            {isHovered && (
                <div className="text-center absolute top-0 bottom-0 left-0 right-0 bg-black opacity-75 text-white">
                    <h2 className="text-2xl font-semibold my-5">{title}</h2>
                    <p className="text-lg">{content}</p>
                    <p className="text-center font-bold my-5 text-xl">Read More</p>
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const cardsData = [
        { img: img1, title: 'ASSISTANCE', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img2, title: 'FINANCING', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img1, title: 'ASSISTANCE', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img2, title: 'FINANCING', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img1, title: 'ASSISTANCE', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img2, title: 'FINANCING', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
    ];

    return (
        <div>
            <Mainheading title="Projects" ThisPage="Project" img={img} />
            <div className="container mx-auto  py-8">
                <div className="w-full flex flex-col mx-auto my-10 md:flex-row flex-wrap justify-center">
                    <div className="w-full mx-auto">
                        <Heading about="OUR" company="SOLUTION" />
                        <div className="flex flex-wrap justify-between">
                            {cardsData.map((card, index) => (
                                <div key={index} className=" lg:w-1/4 md:w-1/2  mb-4 mx-auto justify-center">
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Projects;
