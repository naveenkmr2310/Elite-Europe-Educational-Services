import React from 'react'
import './PostGraduation.css'
import germany from '../../assets/german.jpg'
import czech from '../../assets/czech.jpg'
import '../Slot/Slot.css'
import { Link } from 'react-router-dom' // Add this import

const PostGraduations= () => {

  return (
    <div className='PostGraduations'>
      <Link to="/germany" className="PostGraduation" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={germany} alt="" />
        <div className="caption">
            <p>Germany</p>
        </div>
      </Link>
      <Link to="/czech" className="PostGraduation" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={czech} alt="" />
        <div className="caption">
            <p>Czech Republic</p>
        </div>
      </Link>
    </div>    
  )
}

export default PostGraduations