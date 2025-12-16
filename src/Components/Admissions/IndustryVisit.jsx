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




const IndustryVisit = () => {
    const [slide, setSlide] = useState(0);
    const [faqs, setFaqs] = useState([
        {
    question: "Field of Company",
    answer:
        `International internships are offered across a diverse range of industries in both Germany and Czech Republic. Students can find opportunities in sectors such as engineering, information technology, business management, finance, marketing, hospitality, automotive, manufacturing, biotechnology, and research & development. The selection of the company and field is typically based on your academic background, interests, and the availability of positions with partner organizations. These internships are designed to provide hands-on experience, exposure to European work culture, and a chance to apply theoretical knowledge in real-world settings. Participants also benefit from networking with professionals and gaining insights into global industry standards.`,
    open: true
},
{
    question: "Duration – 15 to 90 Days",
    answer:
        `The duration of international internships generally ranges from 15 to 90 days, allowing flexibility to suit different academic schedules and personal preferences. Short-term internships (15–30 days) are ideal for students seeking a quick introduction to industry practices, participating in workshops, or working on focused projects. Longer internships (up to 90 days) enable deeper involvement in ongoing projects, skill development, and a more immersive experience within the host company. The exact duration is determined by the internship program, company requirements, and visa regulations. All durations are structured to maximize learning and professional growth within the available timeframe.`,
    open: false
},
{
    question: "Incentive / Without Incentive (WO)",
    answer:
        `Some international internships offer incentives such as stipends, travel allowances, or accommodation support, depending on the company and the nature of the internship. These incentives are more common in longer or project-based internships. However, many internships, especially those focused on training or short-term exposure, may be without monetary incentives (WO). Regardless of the incentive structure, all internships provide valuable practical experience, a certificate of completion, and the opportunity to enhance your resume with international exposure. It is important to clarify the incentive details with the host company before starting your internship to set clear expectations.`,
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
            <Title subTitle='International Internships' title='Germany & Czech Republic' />
            <div className="container1">
                {/* <div className="carousel">
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
                </div> */}
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndustryVisit
