import React, { useRef, useState, useEffect } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/test1.jpeg'
import user_2 from '../../assets/Vicky.jpeg'
import user_3 from '../../assets/poojith.jpeg'
import user_4 from '../../assets/user-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Testimonials = () => {

    const slider = useRef();

  // Replace the old tx logic with an index-based circular slider
  const indexRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateTransform = (index) => {
    if (!slider.current) return;
    const slideCount = slider.current.children.length || 1;
    // translate as a fraction of total width so it adapts to number of slides
    const percent = -(index * 100) / slideCount;
    slider.current.style.transform = `translateX(${percent}%)`;
  };

  const slideForward = () => {
    const count = slider.current?.children.length || 1;
    indexRef.current = (indexRef.current + 1) % count;
    updateTransform(indexRef.current);
  };

  const slideBackward = () => {
    const count = slider.current?.children.length || 1;
    indexRef.current = (indexRef.current - 1 + count) % count;
    updateTransform(indexRef.current);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused) slideForward();
    }, 10000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider" onMouseEnter={()=>setIsPaused(true)} onMouseLeave={()=>setIsPaused(false)}>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Raveen Adhitya S</h3>
                            <span>Master Information security - Masaryk University-Brno</span>
                        </div>
                    </div>
                    <p>This consultancy provided exceptional, proactive support in flawlessly processing university documents and offering clear guidelines, which was vital given your limited time. Their insightful analysis and tailored mock interviews significantly boosted your application and confidence, making them the best choice for reliable university assistance.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Vignesh Jayashankar</h3>
                            <span>Prague university of Economics and Business - VSE Information System & Management</span>
                        </div>
                    </div>
                    <p>The support from this consultancy was highly personalized and crucial for my successful admission to the Prague University of Economics and Business, particularly the VSE Information System & Management program. Their flawless handling of documents and professional guidance made the entire application process seamless and stress-free.</p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sai Poojith</h3>
                            <span>Long Term Dependent Visa</span>
                        </div>
                    </div>
                    <p>The consultancy provided impeccable, detailed assistance with my long-term dependent visa application, handling every complex requirement with expertise. Their proactive communication and precise guidance were indispensable, ensuring a smooth, error-free process and a successful outcome.</p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_2} alt="" /> */}
                        <div>
                            <h3>Pavithra Kalyani</h3>
                            <span>Health Insurance</span>
                        </div>
                    </div>
                    <p>They were instrumental in navigating the compulsory health insurance for my long-term stay in the Czech Republic. Their expert, up-to-date guidance ensured I secured the legally required Comprehensive Health Insurance</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_2} alt="" /> */}
                        <div>
                            <h3>Archanaa Velmurugan</h3>
                            <span>Long Term Dependent Visa</span>
                        </div>
                    </div>
                    <p>Elite Europe Educational Services delivered flawless, proactive assistance with my dependent visa application for the Czech Republic, expertly handling the strict documentation and Embassy procedures. Their thorough preparation and constant support ensured the approval process was efficient and stress-free</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_2} alt="" /> */}
                        <div>
                            <h3>Fasila Sujakani</h3>
                            <span>Long Term Dependent Visa & Health Insurance</span>
                        </div>
                    </div>
                    <p>Securing my Long-Term Dependent Visa and mandatory Comprehensive Health Insurance in the Czech Republic was made effortless by the team's assistance. Their professional, unified handling of both critical requirements ensured all documentation was perfect and the complex process concluded without a single issue.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
