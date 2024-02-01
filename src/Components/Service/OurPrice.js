import React from 'react';
import Heading from '../Heading';
import backgroundImage from '../images/ourpricebg.png';

const OurPrice = () => {
    const plandata = [
        { plan: "Basic Plan", rate: "Rs 900 Sqr.Feet", duration: "1 year" },
        { plan: "Standard Plan", rate: "Rs 1200 Sqr.Feet", duration: "1.5 year" },
        { plan: "Premium Plan", rate: "Rs 1500 Sqr.Feet", duration: "2 year" },
    ];

    return (
        <div>
            <div className='w-full' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '550px' }}>
                <div className='text-center my-5'>
                    <Heading about="Our" company="Price" />
                    <h1 className='text-5xl font-bold pb-2'>Discover trust team and our experts</h1>
                </div>

                <div className='w-9/12 mx-auto flex flex-wrap justify-center'>
                    {plandata.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="bg-white border border-gray-300 p-4 rounded-lg plancard">
                                <h2 className="text-lg font-bold mb-2">{item.plan}</h2>
                                <p className="text-gray-600">{item.rate}</p>
                                <p className="text-gray-600">{item.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPrice;
