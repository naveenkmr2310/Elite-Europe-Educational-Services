import React, { useRef, useState, useEffect } from 'react'
import './Team.css'
import user_1 from '../../assets/Ashwin.jpeg'
import user_2 from '../../assets/Noufal.jpeg'
import user_3 from '../../assets/Ramya.jpeg'

const Testimonials = () => {

    const sliderrr = useRef();

    // index-based circular slider
    const indexRef = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const updateTransform = (index) => {
        if (!sliderrr.current) return;
        const slideCount = sliderrr.current.children.length || 1;
        const percent = -(index * 100) / slideCount;
        sliderrr.current.style.transform = `translateX(${percent}%)`;
    };

    const slideForward = () => {
        const count = sliderrr.current?.children.length || 1;
        indexRef.current = (indexRef.current + 1) % count;
        setCurrentIndex(indexRef.current);
    };

    const slideBackward = () => {
        const count = sliderrr.current?.children.length || 1;
        indexRef.current = (indexRef.current - 1 + count) % count;
        setCurrentIndex(indexRef.current);
    };

    const goTo = (i) => {
        const count = sliderrr.current?.children.length || 1;
        indexRef.current = ((i % count) + count) % count;
        setCurrentIndex(indexRef.current);
    };

    useEffect(() => {
        // set slides count after first render (when ref is populated)
        const setCount = () => setSlidesCount(sliderrr.current?.children.length || 0);
        setCount();
        window.addEventListener('resize', setCount);
        return () => window.removeEventListener('resize', setCount);
    }, []);

    useEffect(() => {
        // whenever currentIndex changes, update transform
        updateTransform(currentIndex);
    }, [currentIndex]);

    // useEffect(() => {
    //   const id = setInterval(() => {
    //     if (!isPaused) slideForward();
    //   }, 3000);
    //   return () => clearInterval(id);
    // }, [isPaused]);

    return (
        <div className='testimonials'>
            <div className="sliderrr" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                <ul ref={sliderrr}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Ashwin Kumar Sampath</h3>
                                    <span>Founder & Technical Expert</span>
                                </div>
                            </div>
                            <p>As the founder of Elite Europe Educational Services, I oversee a consultancy that delivers tailor-made support for each student, assisting professionals and students in securing study abroad placements, university enrollments, short-term tourist visas, and long-term dependent visas while fostering global networks. Our firm provides personalized, end to end assistance from document preparation to application submissions while ensuring full compliance with Schengen and national standards. This individualized approach guarantees that every client's unique needs are met for successful study abroad experiences.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Muhammed Shahul Hameed</h3>
                                    <span>Educational Consultant & Technical Expert</span>
                                </div>
                            </div>
                            <p>As a Master's graduate from TU Braunschweig with a specialization in Computational Sciences in Engineering (Simulation, Fluid Dynamics, AI), and years of professional experience in Germany with companies like MAHLE and Akkodis, I offer aspiring Indian students a unique bridge to German education. Fluent in both German and English, I provide comprehensive guidance on university applications, specialized programs (DevOps, AI), cultural adaptation, and even lead guided tours to showcase German academic and industrial life. My goal is to leverage my technical expertise and cross-cultural understanding to ensure a successful study journey in Germany.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Ramya Kalyani</h3>
                                    <span>Senior Consultant</span>
                                </div>
                            </div>
                            <p>Senior Consultant specializing in higher education and visa support (Schengen, tourist, dependent visas). I offer end-to-end, personalized guidance—from document preparation to submission—ensuring full compliance and a successful international journey for students and professionals.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="dots" role="tablist" aria-label="carousel navigation">
                {Array.from({ length: slidesCount || 3 }).map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials