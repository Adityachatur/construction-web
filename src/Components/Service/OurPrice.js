import React from 'react';
import Heading from '../Heading';
import backgroundImage from '../images/ourpricebg.png';

const OurPrice = () => {
    const plandata = [
        {
            plan: "Basic Plan",
            rate: "Rs 900/Sq.Ft",
            duration: "1 year",
            coverage: "Standard materials & construction methods.",
            paymentSchedule: "25% deposit, remaining balance quarterly.",
            clientSupport: "Dedicated project manager for updates."
        },
        {
            plan: "Standard Plan",
            rate: "Rs 1200/Sq.Ft",
            duration: "1.5 years",
            coverage: "Upgraded materials & customization options.",
            paymentSchedule: "20% deposit, remaining balance monthly.",
            clientSupport: "Weekly progress reports & meetings."
        },
        {
            plan: "Premium Plan",
            rate: "Rs 1500/Sq.Ft",
            duration: "2 years",
            coverage: "High-end materials & personalized consultation.",
            paymentSchedule: "15% deposit, flexible payment options.",
            clientSupport: "24/7 access to project team & priority response."
        }
    ];

    return (
        <div>
            <div className='w-full' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '600px' }}>
                <div className='text-center my-5'>
                    <Heading about="Our" company="Price" />
                    <h1 className='lg:text-5xl md:text-2xl text-xl font-bold pb-2'>Discover trust team and our experts</h1>
                </div>

                <div className='w-full px-4 flex flex-wrap justify-center'>
                    {plandata.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
                            <div className="bg-white border border-gray-300 rounded-lg plancard my-3 space-y-5 text-lg py-8 px-5 font-bold text-center">
                                <h2 className="text-2xl font-bold mb-2">{item.plan}</h2>
                                <p className="text-gray-600 text-2xl">{item.rate}</p>
                                <p className="text-gray-600 text-2xl">{item.duration}</p>
                                <p className="text-gray-600">Coverage: {item.coverage}</p>
                                <p className="text-gray-600">Payment Schedule: {item.paymentSchedule}</p>
                                <p className="text-gray-600">Client Support: {item.clientSupport}</p>
                                <button className='button'>Purchase</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPrice;
