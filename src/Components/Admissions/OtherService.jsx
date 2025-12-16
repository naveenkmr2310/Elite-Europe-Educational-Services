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
import { useLocation } from 'react-router-dom'

const OtherService = () => {
    const location = useLocation()
    const service = location.state?.service ?? 'No service specified'
    const [slide, setSlide] = useState(0);
    const [faqs, setFaqs] = useState([
        {
    question: "IELTS Coaching",
    answer:
        "Classes conducted by professionals with 10 plus years of experience.\n• 100% Guaranteed pass percentage.\n• 20 Classes for professionals, Minimum 45 minutes maximum 1 hour per session.\n• Basic package which includes 15  classes of strategy imbibition and 5 practical sessions.\n• For intermediates, 15 classes for strategies imbibition and 10 classes for practical session.\n• Technical University of Ostrava\n• For beginners preferably 15 classes for strategies imbibition and 15 classes for practical sessions.\n• Standard materials for all modules and mock tests will be conducted.",
    open: service === "IELTS Coaching" ? true : false
},
{
    question: "Health Insurance",
    answer:
        "\n• Czech Republic requires comprehensive health insurance for both short-term (Schengen visa up to 90 days) and long-term visas (over 90 days), with specifics varying by stay duration and purpose. Coverage must meet minimum limits, be valid across Schengen states, and come from authorized providers. We co-operate with insurance providers such as Maxima, VZP, Uniqua, Slavia, AXA. \n • Schengen short-term visas demand travel medical insurance covering at least €60,000 for emergency medical care, hospitalization, repatriation, and evacuation, with no deductibles. It applies to the full stay period and excludes accidents from intentional acts or substance misuse.\n • Long-term visas need initial travel insurance for urgent care €400,000 the first 90 days, transitioning to comprehensive health insurance covering the entire stay. This includes preventive care, treatment, hospitalization; must be from Czech-authorized insurers, no cost-sharing. Employed applicants or public insurance contributors may be exempt post-employment start.",
    open: service === "Health Insurance" ? true : false
},
{
    question: "Apostille Services",
    answer:
        `Academic documents including degrees, transcripts, mark sheets, and school certificates must first get HRD verification from the state education department, then MEA apostille. Personal files like birth certificates and PCCs require initial notary or Home Department attestation. These processes confirm authenticity for university applications & visas. 
Employment visas demand apostilles on experience certificates, degrees, birth/marriage certificates, and affidavits after specific pre-authentications—HRD for educational papers and SDM/notary for personal documents.`,
    open: service === "Appostile" ? true : false
},
{
    question: "Translation Services",
    answer:
        `In the EU, sworn translations require certified translators authorized by courts, who affix a seal and stamp along with a certification of accuracy, securely binding the translation to the original document. This certification covers vital records like birth, marriage, academic credentials, and legal papers. We typically manage the notarization of originals and coordinate delivery to these official translators.`,
    open: service === "Translation" ? true : false
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
            <Title subTitle='Other Services' title='We Offer' />
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

export default OtherService
