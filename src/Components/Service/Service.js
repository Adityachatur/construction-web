import React from 'react'
import Mainheading from '../Mainheading'
import img from '../images/home5.jpg'
import Servicehead from './Servicehead'
import FaqSolution from './FaqSolution'
import OurService from './OurService'
import Footer from '../Footer/Footer'
const Service = () => {
    return (
        <div>
            <Mainheading title={"DIVERSIFIED SERVICES. UNVARYING QUALITY."} ThisPage={"Service"} img={img} />
            <Servicehead />
            <FaqSolution />
            <OurService />
            <Footer/>
        </div>
    )
}

export default Service
