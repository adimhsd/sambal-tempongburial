import React from 'react';
import { testimonials } from '../data/content';
import '../styles/Testimonials.css';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const avatars = [avatar1, avatar2, avatar3];

const Testimonials = () => {
    const sliderRef = React.useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-title">
                    <h2>Kata Mereka</h2>
                    <p>Apa kata pelanggan setia kami tentang cita rasa SedapNusantara</p>
                </div>

                <div className="testimonials-wrapper">
                    <button
                        className="slider-btn prev-btn"
                        onClick={() => scroll('left')}
                        aria-label="Previous testimonial"
                    >
                        &#10094;
                    </button>

                    <div className="testimonials-slider" ref={sliderRef}>
                        {testimonials.map((item, index) => (
                            <div key={item.id} className="testimonial-card">
                                <div className="testimonial-content">
                                    <div className="quote-icon">“</div>
                                    <p className="testimonial-text">{item.text}</p>
                                </div>
                                <div className="testimonial-author">
                                    <img
                                        src={avatars[index % avatars.length]}
                                        alt={item.name}
                                        className="author-avatar"
                                        loading="lazy"
                                    />
                                    <div className="author-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="slider-btn next-btn"
                        onClick={() => scroll('right')}
                        aria-label="Next testimonial"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
