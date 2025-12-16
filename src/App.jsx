import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Components/Home/Home'
import Admissions from './Components/Admissions/Admissions'
import AdmissionsCzech from './Components/Admissions/AdmissionsCzech'
import VisaSupport from './Components/Admissions/VisaSupport'
import IndustryVisit from './Components/Admissions/IndustryVisit'
import OtherService from './Components/Admissions/OtherService'


const App = () => {

  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <Hero/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/germany" element={<Admissions/>} />
          <Route path="/czech" element={<AdmissionsCzech/>} />
          <Route path="/VisaSupport" element={<VisaSupport/>} />
          <Route path="/IndustryVisit" element={<IndustryVisit/>} />
          <Route path="/OtherService" element={<OtherService/>} />
        </Routes>
      </Router>  
    </>
  )
}

export default App