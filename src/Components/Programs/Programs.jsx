import React from 'react'
import './Programs.css'
import program_1 from '../../assets/college1.jpg'
import program_2 from '../../assets/vacay.jpg'
import program_3 from '../../assets/consult.jpg'
import program_4 from '../../assets/iv.jpg'
import program_5 from '../../assets/expert.jpg'
import program_6 from '../../assets/ielts.jpg'
import '../Slot/Slot.css'
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom' // Add this import


const Programs = () => {

  const handleNavClick = (section, offset = 0) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, offset, duration: 500 });
      }, 100);
    } else {
      scroller.scrollTo(section, { smooth: true, offset, duration: 500 });
    }
    setMobileMenu(false);
  };
  return (
    <div className='programs'>
      <div className="program" onClick={handleNavClick('PostGraduations', -260)}>
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Post Graduation</p>
        </div>
      </div>
      <div className="program">
        <Link to="/VisaSupport" className="VisaSupport" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_2} alt="" />
          <div className="caption">
            <p>Visa Assistance</p>
          </div>
        </Link>
      </div>
      <div className="program" onClick={handleNavClick('mentors', -260)}>
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Career Counselling</p>
        </div>
      </div>
      <div className="program">
        <Link to="/IndustryVisit" className="IndustryVisit" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_4} alt="" />
          <div className="caption">
            <p>Internships & Visits</p>
          </div>
        </Link>
      </div>
      <div className="program" onClick={handleNavClick('mentors', -260)}>
        <img src={program_5} alt="" />
        <div className="caption">
          <p>Expert Interactions</p>
        </div>
      </div>
      
      {/* <div className="program" onClick={handleNavClick('mentors', -260)}>
        <img src={program_6} alt="" />
        <div className="caption">
          <p>IELTS Coaching</p>
        </div>
      </div> */}
    </div>

  )
}

export default Programs
