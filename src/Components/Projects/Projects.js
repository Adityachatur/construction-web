import React, { useState } from 'react';
import Heading from '../Heading';
import img1 from '../images/home1.jpg';
import img2 from '../images/home3.jpg';
import img from '../images/home4.jpg';
import Footer from '../Footer/Footer';
import Mainheading from '../Mainheading';

// Component for individual card
const Card = ({ img, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-96 mx-auto my-4 service-cardhover relative" style={{ height: "400px" }}
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
                <div className="text-center absolute top-0 bottom-0 left-0 right-0 rounded-md bg-black opacity-85 py-40 text-white">
                    <h2 className="text-3xl font-semibold my-5">{title}</h2>
                    <p className="text-xl">{content}</p>
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
            <div className="container w-11/12  mx-auto  py-8">
                <div className="w-full flex flex-col  my-10 md:flex-row flex-wrap justify-center">
                    <div className="w-full mx-auto">
                        <Heading about="OUR" company="SOLUTION" />
                        <div className="flex flex-wrap justify-between">
                            {cardsData.map((card, index) => (
                                <div key={index} className=" lg:w-1/4 md:w-1/2  mb-4 mx-auto justify-center items-center">
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
