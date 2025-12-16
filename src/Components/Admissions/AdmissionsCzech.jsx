import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Admissions.css'
import { data } from "../Data/carouselData.json";
import hero from "../../assets/hero.png"
import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero2.jpg"
import hero3 from "../../assets/hero3.jpg"
import hero4 from "../../assets/hero4.jpg"
import FAQ from "../FAQ/FAQ";
import Title from '../Title/Title'
import Navbar from '../Navbar/Navbar'
import white_arrow from '../../assets/white-arrow.png'




const AdmissionsCzech = () => {
  const [slide, setSlide] = useState(0);
  const [faqs, setFaqs] = useState([
    {
      question: "Why Czechia ",
      answer:
        "Czechia is a rapidly developing country in Central Europe, known for its affordable public and private university education. Students benefit from free access to the labor market and a 9-month job search visa after graduation. Admission requirements are straightforward, making entry to universities easier. The education system is industry-oriented, and the country boasts a very low unemployment rate (below 3%). Czechia is also recognized as one of the safest countries for students.",
      open: false
    },
    {
      question: "Application Process",
      answer:
        "The application process for studying in Czechia involves the following steps: 1) Select your desired program, 2) Apply for admission to the university, 3) Receive your offer letter, 4) Prepare all necessary documents for your visa application, 5) Apply for a student visa, and 6) Depart from India to the Czech Republic.",
      open: false
    },
    {
      question: "List of Universities",
      answer:
        "Some of the top universities in Czechia include:\n• Savs – Skoda Auto Vysoke Skola\n• University of Pardubice\n• Prague University of Economics & Business\n• Czech University of Life Science\n• Technical University of Ostrava\n• Technical University of Liberec\n• Czech Technical University\n• Brno University of Technology\n• Mendel University in Brno",
      open: false
    },
    {
      question: "Major Costs",
      answer:
        "The major costs for studying in Czechia include:\n• Proof of funds (show money): ₹6 lakh per year\n• Monthly living expenses: around ₹35,000 (can be managed with part-time work)\n• Dormitory accommodation: ₹18,000–₹20,000 per month\n• Tuition fees: approximately ₹3.5–₹4 lakh per year (fees may vary by course)",
      open: false
    },
    {
      question: "Major Challenges",
      answer:
        "• Language barrier at the beginning, especially outside major cities\n• No campus placements – students must apply individually in the job market",
      open: false
    },
   {
  question: "List of Companies",
  answer:
    "Some major companies in Czechia include:\n• Skoda, Foxconn, Accenture, Continental, Bosch, Siemens, Infosys, Barclays, Iveco Bus, IBM, Amazon,\n• ABB, Valeo, Honeywell, Novartis, Capgemini, Bata, Doosan, DHL, KPMG,\n• JAWA, Deloitte, PWC, Forvia",
  open: false
},
  ]);
  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const data = [
    {
      "src": hero,
      "alt": "Image 1 for carousel"
    },
    {
      "src": hero1,
      "alt": "Image 2 for carousel"
    },
    {
      "src": hero2,
      "alt": "Image 3 for carousel"
    },
    {
      "src": hero3,
      "alt": "Image 2 for carousel"
    },
    {
      "src": hero4,
      "alt": "Image 3 for carousel"
    }
  ]
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div>
      <Navbar stickybool={true} Pcomponent={"admission"} /><br /><br />
      <Title subTitle='Admissions' title='Admissions - Czech Republic' />
      <div className="container1">
        <div className="carousel">
          <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
          {data.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          />
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdmissionsCzech
