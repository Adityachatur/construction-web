import React from 'react'

const Heading = (Props) => {
    return (
        <div>
            <div className='w-full'>
                <h1 className='lg:py-10 lg:pl-32 p-4 w-full text-6xl font-bold'><span className='text-yellow-500 text-6xl font-bold '>{Props.about}</span> {Props.company}</h1>
            </div>
        </div>
    )
}

export default Heading
