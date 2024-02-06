import React from 'react'

const Heading = (Props) => {
    return (
        <div>
            <div className='w-full'>
                <h1 className='lg:py-10 lg:pl-32 p-4 w-full lg:text-6xl md:text-3xl text-xl font-bold uppercase'><span className='text-yellow-500  font-bold '>{Props.about}</span> {Props.company}</h1>
            </div>
        </div>
    )
}

export default Heading
