import React, { useRef } from 'react'
import './Team.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Ashwin.jpeg'
import user_2 from '../../assets/Noufal.jpeg'
import user_3 from '../../assets/Ramya.jpeg'
import user_4 from '../../assets/user-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Team = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      {/* <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/> */}
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ashwin Kumar Sampath</h3>
                            <span>Founder & Technical Expert</span>
                        </div>
                    </div>
                    <p>As the founder of Elite Europe Educational Services, I oversee a consultancy that delivers tailor-made support for each student, assisting professionals and students in securing study abroad placements, university enrollments, short-term tourist visas, and long-term dependent visas while fostering global networks. Our firm provides personalized, end to end assistance from document preparation to application submissions while ensuring full compliance with Schengen and national standards. This individualized approach guarantees that every client's unique needs are met for successful study abroad experiences.</p>

                </div>
            </li>
        </ul>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Muhammed Shahul Hameed</h3>
                            <span>Educational Consultant & Technical Expert</span>
                        </div>
                    </div>
                    <p>As a Master's graduate from TU Braunschweig with a specialization in Computational Sciences in Engineering (Simulation, Fluid Dynamics, AI), and years of professional experience in Germany with companies like MAHLE and Akkodis, I offer aspiring Indian students a unique bridge to German education. Fluent in both German and English, I provide comprehensive guidance on university applications, specialized programs (DevOps, AI), cultural adaptation, and even lead guided tours to showcase German academic and industrial life. My goal is to leverage my technical expertise and cross-cultural understanding to ensure a successful study journey in Germany.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ramya Kalyani</h3>
                            <span>Senior Consultant</span>
                        </div>
                    </div>
                    <p>Senior Consultant specializing in higher education and visa support (Schengen, tourist, dependent visas). I offer end-to-end, personalized guidance—from document preparation to submission—ensuring full compliance and a successful international journey for students and professionals.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>E3S, Mentor</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at E3S was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>E3S, Mentor</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at E3S was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Team
