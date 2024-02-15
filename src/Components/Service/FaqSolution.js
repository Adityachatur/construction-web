import React, { useState } from 'react';
import Heading from '../Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/card-compass.png';
import img2 from '../images/card-renovation.png'

// Component for individual card
const Card = ({ img, title, content }) => (
    <div className="w-80 h-96 border rounded-md shadow-md p-4 mx-auto service-cardhover ">
        <img src={img} className="h-24 my-5 mx-auto zoom" alt="" />
        <h2 className="text-2xl font-semibold my-5 text-center">{title}</h2>
        <p className="text-lg text-gray-600 text-center">{content}</p>
        <p className='text-center font-bold my-5 text-xl'>Read More</p>
    </div>
);

const FaqSolution = () => {
    const initialData = [
        { question: 'Choose Between rates or instant payment', answer: 'Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important.' },
        { question: 'Come to see a live preview', answer: 'Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.' },
        { question: 'Choose the correct service', answer: 'The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.' }
    ];

    const [faqData, setFaqData] = useState(initialData.map(item => ({ ...item, isOpen: false })));

    const toggleContent = index => {
        setFaqData(prevState =>
            prevState.map((item, i) =>
                i === index ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
            )
        );
    };

    return (
        <div>
            <div className="w-full md:w-10/12 flex flex-col mx-auto my-10 md:flex-row">
                <div className="w-full md:w-5/12 mx-auto md:mr-5 mb-5 md:mb-0">
                    <Heading about="SOME" company="FAQ" />
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="h-12 text-xl font-bold border-2 flex justify-between items-center px-5 mx-4">
                                <h1>{item.question}</h1>
                                <FontAwesomeIcon className="cursor-pointer" icon={item.isOpen ? faMinus : faPlus} onClick={() => toggleContent(index)} />
                            </div>
                            <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
                                <p className="p-6 text-lg">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-5/12 mx-auto">
                    <Heading about="OUR" company="SOLUTION" />
                    <div className="flex flex-col md:flex-row justify-evenly">
                        <Card img={img1} title="ASSISTANCE" content="Lorem Ipsum is simply dummy text of the printing and setting as Planning." />
                        <Card img={img2} title="FINANCING" content="Content for Card 2. Fusce et elit ac risus condimentum malesuada non sit amet purus." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSolution;
