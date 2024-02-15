import React from 'react'
import Contactus from './Contactus'
import Mainheading from '../Mainheading'
import img from '../images/home4.jpg'
import Footer from '../Footer/Footer'
import Map from './Map'

const Contact = () => {
    return (
        <div>
            <Mainheading title="Contact" ThisPage="ContactUs" img={img} />
            <Contactus />
            <Map />
            <Footer />
        </div>
    )
}

export default Contact
