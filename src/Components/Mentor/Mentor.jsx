import React, { useRef, useState, useEffect } from 'react'
import './Mentor.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Tariq.jpeg'
import user_2 from '../../assets/JayaPrakash.jpeg'
import user_3 from '../../assets/Thinesh.jpg'
import user_4 from '../../assets/Suresh.jpeg'
import user_5 from '../../assets/Ashwin.jpeg'
import user_6 from '../../assets/Noufal.jpeg'
import user_7 from '../../assets/Sai.jpeg'
import white_arrow from '../../assets/white-arrow.png'
import emailjs from '@emailjs/browser';


const Testimonials = () => {
const [result, setResult] = React.useState("");
const [mentor, setMentor] = React.useState("");
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [phone, setPhone] = React.useState("");
const [subject, setSubject] = React.useState("");
const [message, setMessage] = React.useState("");
const [date, setDate] = React.useState("");
const [time, setTime] = React.useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    const serviceId='service_xvr0phk';
    const templateId='template_55thxnf';
    const publicKey='iRfBxC67GjHG7-vIh';
    const templateParams = {
      name: name,
      email: email,
      number: phone,
      title: subject,
      date: date,
      time: time,
      mentor: mentor
    };
    setResult("Sending....");
    if(email === "" || name === "" || phone === "" || subject === "" || date === "" || time === ""){
        console.error("Kidnly fill all the fields.");
        setResult("Kidnly fill all the fields.");
      }else{
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setResult("Message sent successfully!");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setResult("Failed to send message. Please try again later.");
        });
      }
  };
const [modal, setModal] = useState(false);
const toggleModal = (mentor) => {
    setModal(!modal);
    setMentor(mentor);
};

if(modal) {
    document.body.classList.add('active-modal')
} else {
    document.body.classList.remove('active-modal')
}
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
      if (!modal && !isPaused) slideForward();
    }, 10000);
    return () => clearInterval(id);
  }, [modal, isPaused]);

  return (
    <div className='mentors'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="sliderr" onMouseEnter={()=>setIsPaused(true)} onMouseLeave={()=>setIsPaused(false)}>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_5} alt="" />
                        <div>
                            <h3>Ashwin Kumar Sampath</h3>
                            <span>Founder, Elite Europe Educational Services</span><br></br>
                            <span>Cost Optimisation & Transfer Business Specialist, Autoneum CZ</span>
                        </div>
                    </div>
                    <p>Elite Europe Educational Services offers personalized, end-to-end support for professionals and students seeking study abroad placements, university enrollment, and visa services (tourist/dependent), ensuring full compliance with Schengen and national standards.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Ashwin Kumar Sampath')} >Book Slot</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_6} alt="" />
                        <div>
                            <h3>Muhammed Shahul Hameed</h3>
                            <span>Consultant & Technical Expert, Elite Europe Educational Services</span>
                        </div>
                    </div>
                    <p>As a TU Braunschweig Master's graduate in Computational Sciences with professional German industry experience (MAHLE, Akkodis), I offer Indian students expert, dual-language guidance on German university admissions, specialized programs (DevOps, AI), and cultural/industrial adaptation.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Muhammed Shahul Hameed')} >Book Slot</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Tariq Uthuman</h3>
                            <span>Project Manager, Skoda Auto</span>
                        </div>
                    </div>
                    <p>Project management professional with expertise in automotive life-cycle management.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Tariq Uthuman')} >Book Slot</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jayaprakash Lakshmanasamy</h3>
                            <span>Design Engineer, Honeywell</span>
                        </div>
                    </div>
                    <p>Mechanical Design professional driving product development, value engineering, and optimization from concept to serial production, excelling in innovative problem-solving within cross-functional, multicultural teams.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Jayaprakash Lakshmanasamy')}>Book Slot</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Thinesh kumar J</h3>
                            <span>Lead Engineer, Mahindra & Mahindra</span>
                        </div>
                    </div>
                    <p>A creative engineer works in Research and development of Diesel and BEV vehicles.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Thinesh kumar J')}>Book Slot</button>
                    </div>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Suresh Ramarao</h3>
                            <span>Mechanical development engineer, Buhler</span>
                        </div>
                    </div>
                    <p>Mechanical Designer experience with product life cycle management. Specialized in Design and R&D.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Suresh Ramarao')}>Book Slot</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_7} alt="" />
                        <div>
                            <h3>Sai Sivasankaran</h3>
                            <span>Care Advocate, Transcarent CZ</span>
                        </div>
                    </div>
                    <p>With 7+ years of experience and an MBA in Czechia, I provide expert guidance, showcasing the country's affordable, top-tier English education, quick visa process, and strong career stability for Indian students.</p>
                    <div style={{marginTop:'7%',textAlign: 'center'}}>
                        <button className='btn dark-btn' onClick={()=>toggleModal('Sai Sivasankaran')}>Book Slot</button>
                    </div>
                </div>
            </li>
        </ul>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={()=>toggleModal('')} className="overlay"></div>
          <div className="modal-content" style={{maxWidth:'65vw', minWidth:'55vw', position:'relative', overflow:'auto', top:'55%', maxHeight:'80vh', zIndex:'10000'}}>
            <h2>Book Your Slot</h2><br/>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label><br/>
                    <input 
                        style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}} 
                        type="text" name='name' placeholder='Enter your name' required
                        onChange={(e)=>{setName(e.target.value)}}/>
                    <label>Email</label>
                    <input 
                    style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}}
                    type="text" name='email' placeholder='Enter your email' required
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label>Contact Number</label>
                    <input 
                    style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}}
                    type="tel" name='phone' placeholder='Enter your mobile number' required
                    onChange={(e)=>{setPhone(e.target.value)}}/>
                    <label>Subject</label>
                    <select 
                    style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}}
                    name="subject" defaultValue="" placeholder='Enter your mobile number'
                    onChange={(e)=>{setSubject(e.target.value)}} required>
                    <option value="" disabled>Select..</option>
                    <option value="Admission">Admission</option>
                    <option value="Tourist">Visa Assistance</option>
                    <option value="Consueling">Counselling</option>
                    <option value="Internships">Internships</option>
                    <option value="IELTS Coaching">IELTS Coaching</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Translation">Translation</option>
                    <option value="Apostille">Apostille</option>
                    </select>
                    <label>Date</label>
                    <input 
                    style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}}
                    aria-label="Date" type="date"
                    onChange={(e)=>{setDate(e.target.value)}} required/>
                     <label>Time Slot</label>
                    <select 
                    style={{width:'100%',display: 'block',height:'35px',background: '#EBECFE',padding: '15px',border: 0,outline: 0,marginBottom: '15px',marginTop: '5px'}}
                    name="time" defaultValue=""
                    onChange={(e)=>{setTime(e.target.value)}} required>
                    <option value="" disabled>Select..</option>
                    <option value="6 - 7 PM IST">6 - 7 PM IST</option>
                    <option value="7 - 8 PM IST">7 - 8 PM IST</option>
                    <option value="8 - 9 PM IST">8 - 9 PM IST</option>
                    <option value="9 - 10 PM IST">9 - 10 PM IST</option>
                    </select>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button type='submit' className='btn dark-btn' style={{fontSize:'10px'}}>Book</button>
                    </div>
                </form>
                <span>{result}</span>
            </div>
            <button className="close-modal" onClick={()=>toggleModal('')} style={{cursor:'pointer'}}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Testimonials
