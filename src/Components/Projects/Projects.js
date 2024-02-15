import React, { useState } from 'react';
import Heading from '../Heading';
import img1 from '../images/projectimg1.jpg';
import img2 from '../images/projectimg2.jpg';
import img3 from '../images/projectimg3.jpg'
import img4 from '../images/projectimg4.jpg'
import img5 from '../images/projectimg5.jpg'
import img6 from '../images/projectimg6.jpg'
import img7 from '../images/projectimg7.jpg'
import img8 from '../images/projectimg8.jpg'
import img from '../images/home4.jpg';
import Footer from '../Footer/Footer';
import Mainheading from '../Mainheading';

// Component for individual card
const Card = ({ img, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full mx-auto my-4 service-cardhover relative" style={{ height: "400px", width: "300px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={img}
                className="h-full py-5 mx-auto object-cover"
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
        { img: img1, title: 'Life style building', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img2, title: 'FINANCING', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img3, title: 'Life style building', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img4, title: 'Office Partition Wall', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img5, title: 'ASSISTANCE', content: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning.' },
        { img: img6, title: 'Art Family Residence', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img7, title: 'Life style building', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
        { img: img8, title: 'Art Family Residence', content: 'Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus.' },
    ];

    return (
        <div>
            <Mainheading title="Projects" ThisPage="Project" img={img} />
            <div className="container lg:w-11/12 w-full mx-auto py-8">
                <div className="w-full flex flex-col my-10 md:flex-row flex-wrap justify-center">
                    <div className="w-full mx-auto">
                        <Heading about="OUR" company="SOLUTION" />
                        <div className="flex flex-wrap justify-between">
                            {cardsData.map((card, index) => (
                                <div key={index} className="lg:w-1/4 md:w-1/2 mb-4 mx-auto justify-center items-center">
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
