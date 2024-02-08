import React from 'react'
import Mainheading from '../Mainheading'
import img from '../images/home5.jpg'
import Servicehead from './Servicehead'
const Service = () => {
    return (
        <div>
            <Mainheading title={"DIVERSIFIED SERVICES. UNVARYING QUALITY."} ThisPage={"Service"} img={img} />
            <Servicehead />
        </div>
    )
}

export default Service
