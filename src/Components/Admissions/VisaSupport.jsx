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




const VisaSupport = () => {
    const [slide, setSlide] = useState(0);
    const [faqs, setFaqs] = useState([
        {
            question: "Long Term Visa",
            answer:
                `Czech Republic:  
The long-term visa is designed for individuals planning to stay in Czechia for more than 90 days. This visa is commonly used by students enrolled in degree programs, employees with work contracts, or those on long-term assignments. Applicants must provide proof of purpose (such as a university admission letter or work contract), evidence of sufficient financial resources, health insurance, and confirmed accommodation. The visa allows you to live, study, or work in Czechia for the duration of your program or employment. After arrival, you may need to register with the local authorities.
Germany:  
The long-term (national) visa is required for anyone intending to stay in Germany for more than 90 days, including for university studies, employment, or family reunification. The application process involves submitting documents such as an admission letter or work contract, proof of financial means, health insurance, and accommodation details. Upon arrival in Germany, you must convert this visa into a residence permit at the local Foreigners' Office (Ausländerbehörde) to legally continue your stay.`,
            open: true
        },
        {
            question: "Dependent Visa",
            answer:
                `Czech Republic:  
A dependent visa allows immediate family members (spouse and children) to join the main visa holder in Czechia. The primary applicant must demonstrate sufficient financial resources, suitable accommodation, and proof of relationship (such as marriage or birth certificates). Dependents can usually stay for the same duration as the main visa holder and may be eligible to study or work, depending on the visa type.
Germany:  
The dependent (family reunion) visa enables spouses and children to join family members who are legally residing in Germany. Applicants must provide proof of relationship, adequate accommodation, and sufficient financial means to support the family. In some cases, spouses may need to demonstrate basic German language skills. Once in Germany, dependents may have the right to work or study, depending on the main visa holder’s status.`,
            open: false
        },
        {
            question: "Tourist Visa",
            answer:
                `Czech Republic:  
The tourist (Schengen) visa allows short stays of up to 90 days within a 180-day period for tourism, visiting family or friends, or business purposes. This visa does not permit you to work or engage in long-term study. Applicants must show proof of accommodation, travel insurance, a travel itinerary, and sufficient funds for their stay.
Germany:  
The tourist (Schengen) visa also allows stays up to 90 days for tourism, visiting friends or family, or attending short business meetings. It cannot be converted to a long-term visa while in Germany and does not permit work or study. Applicants must provide a travel itinerary, proof of accommodation, travel insurance, and evidence of financial means for the duration of their stay.`,
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
            <Title subTitle='Visa Support' title='Visa - Germany & Czech Republic' />
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

export default VisaSupport
