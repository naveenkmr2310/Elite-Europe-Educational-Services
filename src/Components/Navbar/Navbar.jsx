import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({stickybool,Pcomponent}) => {

    const [sticky, setSticky] = useState(stickybool!==undefined?stickybool:false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=> setMobileMenu(!mobileMenu);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
      if(Pcomponent==='home') {
        const handleScroll = () => {
          window.scrollY > 50 && !stickybool ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    },[Pcomponent, stickybool]);

    // Helper to handle navigation and scroll
    const handleNavClick = (section, offset=0) => (e) => {
      e.preventDefault();
      if(location.pathname !== '/') {
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
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        {/* <img  alt="" className='logo' /> */}
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={handleNavClick('hero',0)}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={handleNavClick('program',-260)}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={handleNavClick('about',-150)}>About us</Link></li>
          <li><Link to='mentors' smooth={true} offset={-260} duration={500} onClick={handleNavClick('mentors',-260)}>Consult</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={handleNavClick('testimonials',-260)}>Testimonials</Link></li>
          <li><Link to='services' smooth={true} offset={-260} duration={500} onClick={handleNavClick('services',-260)}>Services</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={handleNavClick('contact',-260)}>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    )
}

export default Navbar