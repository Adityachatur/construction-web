import React from 'react'
import Mainheading from '../Mainheading'
import img from '../images/home1.jpg'
import FounderExperience from '../Founder/FounderExperience'
import AboutSummary from './AboutSummary'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <div>
      <Mainheading title={"CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES."} ThisPage={"About uS"} img={img} />
      <FounderExperience />
      <AboutSummary/>
      <Footer/>
    </div>
  )
}

export default About
