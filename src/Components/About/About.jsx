import React from 'react'
import './About.css'
import about_img from '../../assets/About2.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>At Elite Europe Educational Services, we are committed to empowering individuals with global opportunities to achieve their academic and professional dreams. </p>
        <p>With a deep understanding of the ever-evolving international education and career landscapes, we provide expert guidance and personalized services tailored to each individual's aspirations.</p>
        <p>Whether you're pursuing higher education abroad or advancing your career internationally, we are here to support you at every step of your journey.</p>
      </div>
    </div>
  )
}

export default About
