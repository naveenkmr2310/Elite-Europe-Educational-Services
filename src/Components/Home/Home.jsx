import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Programs from '../Programs/Programs'
import Title from '../Title/Title'
import About from '../About/About'
import Campus from '../Campus/Campus'
import Testimonials from '../Testimonials/Testimonials'
import Mentors from '../Mentor/Mentor'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Navbar from '../Navbar/Navbar'
import PostGraduation from '../PostGraduation/PostGraduation'
import OtherServices from '../OtherServices/OtherServices'
import Team from '../Team/Teams'
const Home = () => {
    const [playState, setPlayState] = useState(false);  

return (
    <div>
     <Navbar stickybool={false} Pcomponent={'home'}/>
     <Hero/>
     <div className="container">
        <Title subTitle='Our PROGRAMS' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Mentors' title='Expert Interaction'/>
        <Mentors/>
        <Title subTitle='Services' title='Post Graduation'/>
        <PostGraduation/>
        <Title subTitle='TESTIMONIALS' title='What Custmor Says'/>
        <Testimonials/>
        <Title subTitle='Other Services' title='We Also Offer'/>
        <OtherServices/>
        <Title subTitle='TEAM' title='Meet Our Experts'/>
        <Team/>
        {/* <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/> */}
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
)
}
export default Home
