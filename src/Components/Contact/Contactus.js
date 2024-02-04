import React from 'react';
import contact from '../images/contact.png'

const Contactus = () => {
    return (
        <div>
            <div className='w-full my-5 py-10 bg-black flex flex-wrap'>

                <div className='w-full md:w-1/2 bg-black flex flex-col justify-center md:justify-start md:pl-10'>
                    <h1 className='text-left p-5 text-3xl text-white font-bold lg:pl-28'>GET IN TOUCH</h1>
                    <div className='flex flex-col justify-end mx-5 lg:pl-28'>

                        <div className='text-white'>
                            <label htmlFor="" className='text-2xl'>Enter Name</label> <br />
                            <input type="text" placeholder="Name" className='w-full md:w-10/12 h-10 bg-black border-b-2 text-white lg:text-xl  text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />


                        <div className='text-white'>
                            <label htmlFor="" className='text-2xl'>Enter Email</label> <br />
                            <input type="text" placeholder="Email" className='w-full md:w-10/12 h-10 bg-black border-b-2 text-white lg:text-xl  text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />
                        <div className='text-white'>
                            <label htmlFor="" className='text-2xl'>Enter Phone</label> <br />
                            <input type="text" placeholder="Phone" className='w-full md:w-10/12 h-10 bg-black border-b-2 text-white lg:text-xl   text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />
                        <div className='text-white'>
                            <label htmlFor="" className='text-2xl'>Enter Comment</label> <br />
                            <input type="text" placeholder="Comment" className='w-full md:w-10/12 h-10 bg-black border-b-2 text-white lg:text-xl  text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />

                        <button className='button w-40' style={{ color: "white" }}>Submit</button>
                    </div>
                </div>


                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={contact} style={{ height: "450px" }} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Contactus;
