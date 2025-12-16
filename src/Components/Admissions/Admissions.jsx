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




const Admissions = () => {
  const [slide, setSlide] = useState(0);
  const [faqs, setFaqs] = useState([
    {
      question: "Technology courses Masters / PHD Possibilities / PHD",
      answer:
        "Germany offers numerous opportunities for pursuing advanced studies in groundbreaking technologies at the master’s and PhD levels. Renowned for its strong emphasis on research and innovation, German universities and institutes provide programs in fields like artificial intelligence, robotics, quantum computing, renewable energy, and advanced manufacturing. Many of these programs integrate interdisciplinary approaches, combining engineering, computer science, and natural sciences. With access to state-of-the-art facilities, collaborations with industry leaders, and funding opportunities like DAAD scholarships, Germany stands as a global hub for aspiring researchers and professionals looking to make an impact in emerging technologies.",
      open: false
    },
    {
      question: "Industrial Automation, AI, Mechatronics with Cybersecurity",
      answer: "Germany is a leading destination for advanced studies in Industrial Automation, Artificial Intelligence (AI), Mechatronics, and Cybersecurity, offering exceptional masters and PhD programs tailored to these fields. Renowned universities and research institutes like TU Munich, RWTH Aachen, and Fraunhofer Institutes provide cutting-edge education and research opportunities, integrating these disciplines to address challenges in smart manufacturing and secure systems. Programs emphasize hands-on experience, often through partnerships with industry giants like Siemens, Bosch, and Mercedes-Benz, enabling students",
      open: false
    },
    {
      question:
        "Scholarship Based on Academic performance",
      answer: "1. Germany offers a variety of scholarships based on academic performance for international students pursuing higher education. These scholarships, often funded by government agencies, private organizations, or universities, reward excellence in academics and research potential. Some prominent scholarship programs include: \n 2. DAAD Scholarships: The German Academic Exchange Service (DAAD) offers merit-based scholarships for master's and PhD students across various disciplines, covering tuition, living expenses, and travel costs. \n 3. Deutschlandstipendium: This prestigious scholarship, funded jointly by the German government and private sponsors, awards high-achieving students €300 per month for academic excellence and social commitment. \n 4. Konrad-Adenauer-Stiftung (KAS) Scholarship: For outstanding master's and doctoral students, especially those with leadership potential and interest in socio-political matters. \n 5. Heinrich Böll Foundation Scholarships: These are aimed at academically excellent students pursuing degrees in areas like sustainability, environmental studies, and social sciences. \n 6. Friedrich Ebert Stiftung Scholarship: Designed for students with excellent academic records and a commitment to social democracy. \n University-Specific Scholarships: Many German universities offer performance-based scholarships to international students, such as those provided by RWTH Aachen, TU Munich, or Heidelberg University.\n 7. Eligibility often requires a strong academic record, motivation letter, and sometimes proof of community involvement or leadership skills. These scholarships make studying in Germany accessible to talented students worldwide.",
      open: false
    },
    {
      question: "Erasmus Exchange program",
      answer: "The Erasmus+ Exchange Program offers students the opportunity to study or intern in Germany as part of their degree. Supported by the European Union, the program promotes academic and cultural exchange, allowing participants to spend 3–12 months at a partner institution in Germany. Benefits include tuition fee waivers, monthly stipends, and language training. Open to students from Europe and partner countries worldwide, Erasmus+ fosters international collaboration, enhancing academic and personal growth while building a global network.",
      open: false
    },
    {
      question: "University Fees / year",
      answer: "Germany is known for its low or no tuition fees at public universities, even for expats. Most public institutions charge only a small semester fee, typically between €150–€350 (₹13,000–₹31,000), covering administrative costs and public transportation. However, some federal states charge tuition fees for non-EU students, ranging from €1,500–€3,000 (₹1.3–₹2.6 lakh) per year. Private universities are more expensive, with fees ranging from €10,000–€30,000 (₹8.6–₹26 lakh) annually. Living expenses, including accommodation, add approximately €10,000–€12,000 (₹8.6–₹10.4 lakh) per year to the total cost.",
      open: false
    },
    {
      question: "Country Safety",
      answer: "1. High Safety Standards: Germany is considered one of the safest countries in the world, with a low crime rate and strong law enforcement.\n 2. Strict Laws: Robust laws protect women against harassment, domestic violence, and discrimination.\n 3. Public Transport: Generally safe for women, even at night, with well-lit stations and surveillance in urban areas.\n 4. Cultural Respect: A culture of gender equality and respect for personal freedom is prevalent.\n 5. Support Services: Numerous helplines and organizations support women's safety and rights, such as Frauenhaus (women's shelters).\n 6. Awareness: Like anywhere, it’s advised to stay vigilant, especially in crowded areas or late at night. \n 7. Emergency Services: Efficient and reliable, with quick response times (dial 112 for emergencies).",
      open: false
    },
    {
      question: "Placement opportunities – Average Salary / course wise salary.",
      answer: "1. Strong Job Market: Low unemployment rates, especially in engineering, IT, healthcare, and manufacturing. \n 2. Industry Connections: Universities have partnerships with companies for internships and job placements.\n 3. Work Permit Options: International students can work part-time during studies and apply for an 18-month job search visa after graduation. \n 4. Growing Sectors: High demand in renewable energy, AI, cybersecurity, and advanced manufacturing.\n 5. Career Fairs: Regular job fairs and networking events at universities connect students with employers.\n 6. Language Skills: Proficiency in German boosts job prospects, although many companies operate in English.\n 7. Diverse Opportunities: Roles available in multinational corporations, startups, and research institutions.",
      open: false
    },
    {
      question: "Stay back on student visa",
      answer: "1. Post-Graduation Work Permit: After completing a degree, international students can apply for an 18-month residence permit to look for a job related to their field of study.\n 2. Eligibility: To qualify, students must have completed a recognized degree program at a German university and possess adequate financial means to support themselves.\n 3. Job Search Flexibility: During this period, graduates can work in any job, not just in their field, allowing for broader opportunities. \n 4. Long-term Residency: If a graduate secures a job related to their degree, they can apply for a work visa, which can lead to permanent residency in Germany. 5. Language Advantage: Learning German can enhance job prospects and integration into the local workforce.",
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
      <Navbar stickybool={true} Pcomponent={"admission"}/><br/><br/>  
      <Title subTitle='Admissions' title='Admissions - Germany'/>
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

export default Admissions
