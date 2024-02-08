import React from 'react'
import img from '../images/Servicepng.png'

const Servicehead = () => {
    return (
        <div>
            <div className='flex flex-wrap lg:w-10/12 w-full mt-10 mx-auto'>

                <div className='w-full lg:w-5/12'>
                    <img src={img} alt="" style={{ maxHeight: "650px" }} className="mx-auto" />
                </div>
                <div className='w-full lg:w-6/12 lg:pl-10'>
                    <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold lg:pt-24'>In our work we have pride, quality is what we provide.</h1>
                    <p className='text-xl pt-8 leading-8'>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputa cumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    <div className='flex flex-col lg:flex-row h-auto lg:h-36 border-2 mt-5'>
                        <div className='w-full lg:w-5/12 bg-yellow-500 flex flex-col items-center justify-center lg:justify-center space-y-3 text-xl font-semibold'>
                            <p className='text-white'>Call For a Quote:</p>
                            <p className='text-2xl'>+91 9552314201</p>
                        </div>
                        <div className='w-full lg:w-7/12 bg-black flex justify-center items-center'>
                            <button className='button' style={{ color: "white" }}>ONLINE ESTIMATE FORM</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicehead
