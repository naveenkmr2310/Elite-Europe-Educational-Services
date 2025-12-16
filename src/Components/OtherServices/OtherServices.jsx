import React from 'react'
import './OtherServices.css'
import program_1 from '../../assets/OtherServices1.jpg'
import program_2 from '../../assets/OtherServices2.jpg'
import program_3 from '../../assets/OtherServices3.jpg'
import program_4 from '../../assets/OtherServices4.jpg'
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
    <div className='services'>
      <div className="program">
        <Link to="/OtherService" state={{ service: 'IELTS Coaching' }} className="OtherService" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_1} alt="" />
          <div className="caption">
            <p>IELTS Coaching</p>
          </div>
        </Link>
      </div>
      <div className="program" >
        <Link to="/OtherService" state={{ service: 'Health Insurance' }} className="OtherService" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_2} alt="" />
          <div className="caption">
            <p>Health Insurance</p>
          </div>
        </Link>

      </div>
      <div className="program">
        <Link to="/OtherService" state={{ service: 'Appostile' }} className="OtherService" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_4} alt="" />
          <div className="caption">
            <p>Appostile</p>
          </div>
        </Link>

      </div>
      <div className="program">
        <Link to="/OtherService" state={{ service: 'Translation' }} className="OtherService" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={program_3} alt="" />
          <div className="caption">
            <p>Translation</p>
          </div>
        </Link>

      </div>
    </div>

  )
}

export default Programs
